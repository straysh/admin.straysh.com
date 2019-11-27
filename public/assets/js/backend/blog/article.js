define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    let Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'blog/article/index' + location.search,
                    add_url: 'blog/article/add',
                    edit_url: 'blog/article/edit',
                    del_url: 'blog/article/del',
                    // multi_url: 'blog/article/multi',
                    table: 'article',
                }
            });

            let table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                pageSize: 20,
                columns: [
                    [
                        // {checkbox: true},
                        {field: 'id', title: __('Id'), formatter: Controller.api.formatter.aLink2Article},
                        {field: 'type', title: __('Type')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'author', title: __('Author')},
                        {field: 'title', title: __('Title')},
                        {field: 'slug', title: __('Slug')},
                        {field: 'hits', title: __('Hits')},
                        {field: 'published_at', title: __('Published_at'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'created_at', title: __('Created_at'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updated_at', title: __('Updated_at'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'deleted_at', title: __('Deleted_at'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
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
            },
            formatter: {
                aLink2Article: function(value, row, index){
                    let url = window.location.href;
                    url = url.substring(7);
                    url = url.split('/')[0];
                    url = url.replace('admin.', 'www.');
                    return `<a href="http://${url}/article/${value}" target="_blank" class="btn btn-default btn-sm" style="text-decoration: underline">${value}</a>`;
                }
            },
        }
    };
    return Controller;
});