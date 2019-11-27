<?php

namespace app\admin\controller;

use think\Config;
use think\captcha\Captcha as BaseCaptcha;
use app\common\controller\Backend;


class Captcha extends Backend
{
    protected $noNeedLogin = ['index'];

    public function index($id = "")
    {
        $captcha = new BaseCaptcha((array)Config::get('captcha'));
        return $captcha->entry($id);
    }
}
