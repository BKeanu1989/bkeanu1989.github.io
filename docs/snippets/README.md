# Snippets

## ssh & sftp
```bash
// create ssh key
ssh-keygen -t rsa -f ~/.ssh/nameOfPrivateKey




```


## scp (kinda deprecated)
```bash

scp example.txt user@192.168.1.100:/path/to/remote/directory

// if connection closed, try -O
scp -O example.txt user@192.168.1.100:/path/to/remote/directory


scp -i /path/to/private/key example.txt user@192.168.1.100:/path/to/remote/directory

// recursivly copy contents of folders
scp -r /local-directory user@remoteIP:/remote-directory

// -P for not using standard port
scp -P 2222 /local-path/file username@remoteIP:/remote-path

// from remote to local
scp username@remoteHost:/remote/dir/file.txt /local/dir/


```

## Docker

```bash
docker-compose --verbose up
```

docker-compose.yml
```yml
      WORDPRESS_DEBUG: '1'
      WORDPRESS_CONFIG_EXTRA:
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
```

## Wordpress

### Wordpress Custom Post Types
```php

/**
 * Have WordPress match postname to any of our public post types (post, page, race).
 * All of our public post types can have /post-name/ as the slug, so they need to be unique across all posts.
 * By default, WordPress only accounts for posts and pages where the slug is /post-name/.
 * @source https://kellenmace.com/remove-custom-post-type-slug-from-permalinks/
 * @param $query The current query.
 */
function gp_add_cpt_post_names_to_main_query( $query ) {
	// Bail if this is not the main query.
	if ( ! $query->is_main_query() ) {
		return;
	}

	// Bail if this query doesn't match our very specific rewrite rule.
	if ( ! isset( $query->query['page'] ) ) {
		return;
	}

	// Bail if we're not querying based on the post name.
	if ( empty( $query->query['name'] ) ) {
		return;
	}
	// error_log("we are at the end & it should remove prefix");
	// Add CPT to the list of post types WP will include when it queries based on the post name.
	$query->set( 'post_type', array( 'post', 'page', 'POST_TYPE', ) );
}
add_action( 'pre_get_posts', 'gp_add_cpt_post_names_to_main_query' );
```