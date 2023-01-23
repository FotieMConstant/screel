<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    use HasFactory;

    protected $appends = [
        'distributor',
        'referred_distributors',
        'percentage',
        'order_total',
        'commission',
        'products',
        'distributor_autocomplete',
    ];
//  Attributes
    public function getDistributorAttribute() {
        $referer = $this->purchaser->referrer;
        if($referer && $referer->isDistributor()){
            return $referer;
        }

        return null;
    }
    public function getReferredDistributorsAttribute() {
        $referer = $this->purchaser->referrer;
        if($referer){
            return User::whereReferredBy($referer->id)
                ->whereHas('category', function ($query){
                    $query->whereName('Distributor');
                })->count();
        }

        return null;
    }
    public function getPercentageAttribute() {
        $percentage = null;

        if ($this->distributor) {
            $referred_distributors = $this->referred_distributors;

            if ($referred_distributors) {
                switch ($referred_distributors) {
                    case $referred_distributors >= 31:
                        $percentage = 30;
                        break;
                    case $referred_distributors >= 21:
                        $percentage = 20;
                        break;
                    case $referred_distributors >= 11:
                        $percentage = 15;
                        break;
                    case $referred_distributors >= 5:
                        $percentage = 10;
                        break;
                    default:
                        $percentage = 5;

                }
            }
        }
        return $percentage;
    }
    public function getOrderTotalQuantityAttribute(){
        return $this->orderItems->sum('qantity');
    }
    public function getOrderTotalAttribute(){
//        232930 [137 => 6 - 84, 139 => 2 - 175]
        return $this->orderItems()->rightJoin('products', 'product_id', 'products.id')
            ->select('order_items.*', 'products.*')
//            ->addSelect(['total' => DB::raw('sum(qantity*price) as total')])
            ->selectRaw('sum(qantity*price) as total')
            ->groupBy('products.name')
            ->get()
            ->sum('total');
    }
    public function getCommissionAttribute(){
        if ($this->percentage){
            return $this->order_total * $this->percentage/100;
        }

        return null;
    }
    public function getProductsAttribute(){
        return $this->orderItems()->rightJoin('products', 'product_id', 'products.id')
            ->select('order_items.qantity', 'products.*')
            ->selectRaw('sum(qantity*price) as total')
            ->groupBy('products.name')
            ->get();
    }

    public function getDistributorAutocompleteAttribute(){
        $distributors = User::whereHas('category', function ($query){
            $query->whereName('Distributor');
        })->get();
        $first_names = $distributors->map(function ($distributor){
            return $distributor->first_name;
        });
        dd($first_names);
    }


//    Relationships
    public function purchaser() {
        return $this->belongsTo(User::class, 'purchaser_id');
    }

    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }

//    scopes
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('invoice_number', 'like', '%'.$search.'%');
        })->when($filters['dateFrom'] ?? null, function ($query, $dateFrom) {
            $query->where('order_date', '>=', $dateFrom);
        })->when($filters['dateTo'] ?? null, function ($query, $dateTo) {
            $query->where('order_date', '<=', $dateTo);
        })->when($filters['distributorId'] ?? null, function ($query, $distributorId) {
            $referredIds = User::whereReferredBy($distributorId)->get()->map(function ($referred) {
                return $referred->id;
            });
            $query->whereIn('purchaser_id', $referredIds);
        });
    }
}
