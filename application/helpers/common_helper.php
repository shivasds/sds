<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('email_config'))
{
    function email_config()
    {
        // $config['protocol']    = 'smtp';
        // $config['smtp_host']    = 'ssl://smtp.gmail.com';
        // $config['smtp_port']    = '465';
        // $config['smtp_timeout'] = '7';
        // $config['smtp_user']='pintu19mg@gmail.com';
        // $config['smtp_pass']='Password1982';
        // $config['charset']    = 'utf-8';
        // $config['newline']    = "\r\n";
        // $config['mailtype'] = 'html'; // or html
        // $config['validation'] = TRUE; // bool whether to validate email or not 
        // $config['protocol'] = 'sendmail';
        // $config['mailpath'] = '/usr/sbin/sendmail';
        // $config['charset'] = 'utf-8';
        // $config['wordwrap'] = TRUE;
        // $config['mailtype'] = 'html';
        $config['protocol']='smtp';
$config['smtp_host']='ssl://smtp.gmail.com';
$config['smtp_port']='465';
$config['smtp_timeout']='30';
$config['smtp_user']='pintu19mg@gmail.com';
$config['smtp_pass']='Password1982';
$config['charset']='utf-8';
$config['newline']="\r\n";
$config['wordwrap'] = TRUE;
$config['mailtype'] = 'html';

        return $config;
    }   
}

if(!function_exists('paginitaion')) {
    function paginitaion($url, $segment, $perpage, $totalRecords)
    {
        $CI =& get_instance();
        //pagination config
        $config['base_url']    = $url;
        $config['uri_segment'] = $segment;
        $config['total_rows']  = $totalRecords;
        $config['per_page']    = $perpage;
        
        //styling
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a href="javascript:void(0);">';
        $config['cur_tag_close'] = '</a></li>';
        $config['next_link'] = 'Next';
        $config['prev_link'] = 'Prev';
        $config['next_tag_open'] = '<li class="pg-next">';
        $config['next_tag_close'] = '</li>';
        $config['prev_tag_open'] = '<li class="pg-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $CI->pagination->initialize($config);
       return $CI->pagination->create_links();
    }
}

if(!function_exists('paginitaionWithQueryString')) {
    function paginitaionWithQueryString($url, $segment, $perpage, $totalRecords, $suffix)
    {
        $CI =& get_instance();
        //pagination config
        $config['base_url']    = $url;
        $config['uri_segment'] = $segment;
        $config['total_rows']  = $totalRecords;
        $config['per_page']    = $perpage;
        $config['suffix']      = '?' .urldecode(http_build_query($suffix));
        $config['first_url']    = $config['base_url'] . $config['suffix'];
        //styling
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a href="javascript:void(0);">';
        $config['cur_tag_close'] = '</a></li>';
        $config['next_link'] = 'Next';
        $config['prev_link'] = 'Prev';
        $config['next_tag_open'] = '<li class="pg-next">';
        $config['next_tag_close'] = '</li>';
        $config['prev_tag_open'] = '<li class="pg-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $CI->pagination->initialize($config);
       return $CI->pagination->create_links();
    }
}

function in_array_r($needle, $haystack, $strict = false) {
    foreach ($haystack as $item) {
        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && in_array_r($needle, $item, $strict))) {
            return true;
        }
    }
    return false;
}
if(!function_exists('getYoutubeVideoId')){
    function getYoutubeVideoId($video_id){

        // Did we get a URL?
        if ( FALSE !== filter_var( $video_id, FILTER_VALIDATE_URL ) )
        {

            // http://www.youtube.com/v/abcxyz123
            if ( FALSE !== strpos( $video_id, '/v/' ) )
            {
                list( , $video_id ) = explode( '/v/', $video_id );
            }
            // http://www.youtube.com/embed/abcxyz123
            else if( FALSE !== strpos( $video_id, '/embed/' )){
                list( , $video_id ) = explode( '/embed/', $video_id );
            }
            // http://youtu.be/Q8d7LjYrN38
            else if(FALSE !== strpos($video_id, 'youtu.be')){
                $exploded = explode('/', $video_id);
                $video_id = end($exploded);
            }
            // http://www.youtube.com/watch?v=abcxyz123
            else{
                $video_query = parse_url( $video_id, PHP_URL_QUERY );
                parse_str( $video_query, $video_params );
                $video_id = isset($video_params['v']) ? $video_params['v'] : null;
            }

        }

        return $video_id;

    }
}