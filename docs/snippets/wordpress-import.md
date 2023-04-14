# Wordpress Import
```sql
UPDATE PREFIX_options SET option_value = replace(option_value, 'https://live.com', 'http://127.0.1.3') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE PREFIX_posts SET post_content = replace(post_content, 'https://live.com', 'http://127.0.1.3');
UPDATE PREFIX_postmeta SET meta_value = replace(meta_value, 'https://live.com','http://127.0.1.3');
UPDATE PREFIX_posts SET guid = replace(guid, 'https://live.com', 'http://127.0.1.3');
```