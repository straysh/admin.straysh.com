<?php

namespace app\admin\model;

use think\Model;


class ArticleModel extends Model
{

    

    protected $connection = 'database.straysh_info';

    // 表名
    protected $table = 'article';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;

    // 定义时间戳字段名
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    protected $deleteTime = 'deleted_at';

    // 追加属性
    protected $append = [

    ];
    

    







}
