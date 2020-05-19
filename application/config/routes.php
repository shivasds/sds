<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'HomeController';
$route['about-us'] = 'HomeController/about';
$route['blog'] = 'HomeController/blog';
$route['contact-us'] = 'HomeController/contact_us';
$route['request-analysis'] = 'HomeController/request_analysis';
$route['seo-agency-in-bangalore'] = 'HomeController/seo_services';
$route['ppc-company-in-bangalore'] = 'HomeController/ppc_services';
$route['social-media-agency-in-bangalore'] = 'HomeController/smm_services';
$route['web-development-services-in-bangalore'] = 'HomeController/web_services';
$route['content-marketing-services'] = 'HomeController/content_services';
$route['graphics-designing-company-in-bangalore'] = 'HomeController/design_services';
$route['content-marketing-services'] = 'HomeController/content_services';
$route['payroll-outsourcing-services-in-bangalore'] = 'HomeController/payroll';
$route['careers'] = 'HomeController/career';
$route['best-crm-software-in-india'] = 'HomeController/crm_services';
$route['hr-services-in-bangalore'] = 'HomeController/hr';
$route['thankyou'] = 'HomeController/thankyou';
$route['admin/about'] = 'AboutController';
$route['admin/metatags/(:any)'] = 'AdminController/Update_metatags/$1';
$route['admin'] = 'AdminController';
$route['admin/changePassword'] = 'AdminController/changePassword';
$route['admin/add_slider'] = 'AdminController/add_slider';
$route['admin/list_sliders'] = 'AdminController/list_sliders';
$route['admin/update_sliders/(:any)'] = 'AdminController/update_sliders/$1';
$route['admin/delete_slider/(:any)'] = 'AdminController/delete_slider/$1';
$route['admin/metatags/(:any)'] = 'AdminController/Update_metatags/$1';
$route['admin/edit_slider/(:any)'] = 'AdminController/edit_slider/$1';
$route['admin/changePassword'] = 'AdminController/changePassword';
$route['admin/home_page_content'] = 'AdminController/home_page_content';
$route['admin/seo_content'] = 'AdminController/seo_page_content';
$route['admin/ppc_page_content'] = 'AdminController/ppc_page_content';
$route['admin/smm_page_content'] = 'AdminController/smm_page_content';
$route['admin/web_services_page_content'] = 'AdminController/web_services_page_content';
$route['admin/content_page_content'] = 'AdminController/content_page_content';
$route['admin/design_page_content'] = 'AdminController/design_page_content';
$route['admin/blog'] = 'AdminController/add_blog';
$route['admin/blog_list'] = 'AdminController/blog_list';
$route['admin/edit_blog/(:any)'] = 'AdminController/edit_blog/$1';
$route['admin/delete_blog/(:any)'] = 'AdminController/delete_blog/$1';
$route['admin/update_blog/(:any)'] = 'AdminController/update_blog/$1';
$route['login'] = 'Login/admin';
$route['logout'] = 'Login/logout';
$route['profile'] = 'dashboard/profile';
$route['blog/(:any)'] = "HomeController/blog_view/$1";
$route['404_override']         = 'errors';
$route['translate_uri_dashes'] = FALSE;
