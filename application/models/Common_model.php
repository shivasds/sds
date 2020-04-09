<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
class Common_model extends MY_Model {

    function __construct() {
        parent::__construct();
    }
    public function get_table_data($table='',$where='')
{
            $this->db->select('*');
            if($where)
            {
            $this->db->where($where);
            }
            $this->db->from($table);
            $result = $this->db->get()->result_array();
            return $result;
}
      public function page_content_update($data='',$page='')
      {
        $this->db->where('page', $page);
        return $this->db->update('page_content', $data);
      }
      public function getNextBlog($id)
    {
        return $this->db->order_by('id', 'asc')->where('id >', $id)->get('blog')->row();
    }
    public function getPrevBlog($id)
    {
        return $this->db->order_by('id', 'asc')->where('id <', $id)->get('blog')->row();
    }
}