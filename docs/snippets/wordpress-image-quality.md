# Wordpress Image Quality (Default)
at 82% as of Wordpress 4.5

```php
add_filter('jpeg_quality', function($arg){return 100;});
```