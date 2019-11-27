<?php

namespace app\admin\model;

use think\Model;


class CategoryModel extends Model
{

    

    protected $connection = 'database.straysh_info';

    // 表名
    protected $table = 'category';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    







}
