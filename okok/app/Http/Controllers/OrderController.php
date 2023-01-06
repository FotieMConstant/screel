<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render(
            'Order',
            [
                'filters' => Request::all('search', 'dateFrom', 'dateTo', 'distributorId'),
                'orders' => Order::filter(Request::only('search', 'dateFrom', 'dateTo', 'distributorId'))
                    ->paginate(10)
                    ->withQueryString()
                    ->through(fn ($order) => [
                        'id' => $order->id,
                        'invoice_number' => $order->invoice_number,
                        'purchaser' => $order->purchaser,
                        'distributor' => $order->distributor,
                        'referred_distributors' => $order->referred_distributors,
                        'order_date' => $order->order_date,
                        'order_total' => $order->order_total,
                        'percentage' => $order->percentage,
                        'commission' => $order->commission,
                        'products' => $order->products,
                    ]),
                'total_commission' => $this->getTotalCommissionAttribute(),
            ]
        );
    }

    public function distributorAutocomplete() {
        $filter = Request::all('distributor_search');
        $distributor_search = $filter['distributor_search'];
        $distributors = [];
        foreach (User::with(['category'])->get() as  $user) {
            if ($user->category[0]->name == 'Distributor' && (str_contains($user->id, $distributor_search)
                || str_contains($user->name, $distributor_search)
                || str_contains($user->username, $distributor_search)
            )){
                $distributors[] = $user;
            }
        }
        return response()->json($distributors);
    }

    /**
     * Calculate total commission
     * @return float|int
     */
    public function getTotalCommissionAttribute(){
        $total_commission = OrderItem::rightJoin('products', 'product_id', 'products.id')
            ->select('order_items.qantity', 'products.*')
            ->selectRaw('sum(qantity*price) as total')
            ->groupBy('products.name')
            ->get()->map(function ($orderItem){
                return $orderItem->total;
            })->toArray();

        return array_sum($total_commission);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
