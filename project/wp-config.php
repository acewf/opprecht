<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'ace_wf');

/** MySQL database password */
define('DB_PASSWORD', 'nhuvue2q6X4PNd6n');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?`3/-zq*H0kN6q|2Z[xs5fWqd|Ci{lC?7Ht|(+Vd{+1x*JfX=U#E4k(w%-Bs,HEV');
define('SECURE_AUTH_KEY',  '-FF53ts{;[C6&q~s@+4kJP.mJu==,_a{.yJT.?vE-u,kMJT@Q26D^6SunE@Je~OZ');
define('LOGGED_IN_KEY',    'byay6pkE:-7eI}1MtU02MZ{sBr?l4CLBjOl2y3?-D)Tl:u}aia-df~[6K#Kith/l');
define('NONCE_KEY',        '`}qh-M~@`&>]enT{!dIS7pVdZj6d^;g)Qm+Mk{U}LR*$:-j2=H.+{,6;=$6}p|9z');
define('AUTH_SALT',        '95M%dt-6}>HT@[9>9P$7=B.6KfDmNPN+9s}J7zGo5*bng3:c$%>TiU:#-]~4#@01');
define('SECURE_AUTH_SALT', 'M GyP5`UH2ebJ -WtSs!#`Nj-?xLFV^U`5db5N+!^?*`Lu zZlB< p_,+rM)XPc:');
define('LOGGED_IN_SALT',   '+vc%Va!zZP@8:4APKA#bS&w-/Vt8I02b TD@v+|&pBTcyuJinoeH9a^vQL8Ry]Ay');
define('NONCE_SALT',       'kcTPLBx/L#m2PA<|S-a[&+G5IeawSt^S>ADsWiiPt8DfigzoGi83X|v]#9oz&`-L');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_opprecht_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
