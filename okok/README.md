<h1 align="center"><b>LARAVEL AND VUE JS Test</b></h1>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# **Deployment**

## **Prerequisites**
- install composer
- install Docker-compose in your linux distribution  **(optional)**

To deploy the project, run commands below in the project root directory.<br>
PS: you can create "sail" alias
```bash
$ composer install
```
```bash
$ ./vendor/bin/sail npm install
```
```bash
$ cp .env.example .env
```
```php
$ ./vendor/bin/sail artisan key:generate
```
```php
$ ./vendor/bin/sail artisan migrate
```
```php
$ ./vendor/bin/sail artisan storage:link
```
```php
$ ./vendor/bin/sail npm run dev
```

to build and run containers execute:
```php
$ ./vendor/bin/sail up
```
if apache2 is running on port 80 run ```sudo service apache2 stop``` before retry

**_Now your application is available on http://localhost_**

To deploy the project without Docker, run commands below in the project root directory.<br>
PS: you can create "sail" alias
```bash
$ composer install
```
```bash
$ npm install
```
```bash
$ cp .env.example .env
```
```php
$ php artisan key:generate
```
```php
$ php artisan migrate
```
```php
$ php artisan storage:link
```
```php
$ npm run dev
```

to run project:
```php
$ php artisan serve
```

# **Preview with filters**

![Example Reports list](public/naxum-test.png?raw=true "Example Reports list sort by decreasing probability")
