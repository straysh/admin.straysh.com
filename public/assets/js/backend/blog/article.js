define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'blog/article/index' + location.search,
                    add_url: 'blog/article/add',
                    edit_url: 'blog/article/edit',
                    del_url: 'blog/article/del',
                    multi_url: 'blog/article/multi',
                    table: 'article',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'type', title: __('Type')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'author', title: __('Author')},
                        {field: 'title', title: __('Title')},
                        {field: 'slug', title: __('Slug')},
                        {field: 'hits', title: __('Hits')},
                        {field: 'published_at', title: __('Published_at')},
                        {field: 'created_at', title: __('Created_at')},
                        {field: 'updated_at', title: __('Updated_at')},
                        {field: 'deleted_at', title: __('Deleted_at')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});