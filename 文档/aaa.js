$(function(){
	strategyPage.init();
});
var language = $("#language").val();
var strategyIds = $("#strategyIds").val();
var strategyPage = ( function ( me ) {
	var $basicParameters=$("#basicParameters");//基础数据 广告主 订单 计划
	var $websiteId = $("#websiteId");
	var $table=$("#strategyTable");//table
	/**
	 * 初始化界面上的一些特效控件
	 */
	me . init = function () {
		var onfocus = false;
        var disabled = 'disabled';
        if (editPermision) {
            disabled = '';
        }
		var options = {
			select : { style : 'single' },
			"columns":[
				{data:'id'},
				{
					data:'name',
					render: function ( data, type, row, meta ) {
						if(data != null){
							return '<a href="strategyCreativeRel/toPage/'+$basicParameters.val()+'-'+row.id+'?websiteId='+websiteId+'">'+row.name+'</a>';
						}
					},
				},
				{
					data:'active',
					render: function ( data, type, row, meta ) {
						if(data != null){
							var activeStr='<div class="switch switch-small">';
                            activeStr += '<input ' + disabled + ' id="' + row.id + '" type="checkbox" name="active" value="$!{item.active}" ';
							if(row.active){
								activeStr+='checked'
							}
							activeStr+='>';
							activeStr+='<span>';

							if(language == "English"){
								if(row.active){
									activeStr+='ON';
								}else{
									activeStr+='OFF';
								}
							}else{
								if(row.active){
									activeStr+='开启';
								}else{
									activeStr+='关闭';
								}
							}

							activeStr+='</span>';
							return activeStr;
						}

					}
				},
				{
					data:null,
					orderable: false,
					render: function ( data, type, row, meta ) {
						if(data != null){
							var status="未投放";
							if(language == "English"){
								status="OFF";
							}else{
								status="ON";
							}
							var v="";
							if(row.status=="ADVERTISING"){
								status="ON";
							}else{
								//v="id='errorTips"+row.id+"' onmouseover='layer.tips(\""+row.reason_desc+"\",\"#errorTips"+row.id+"\")' onmouseout='layer.closeAll()'"
								v="id='errorTips"+row.id+"' "
							}
							return "<span "+v+">"+status+"</span>";
						}

					}
				},
				// {
				// 	data:'isFree',
				// 	render: function ( data, type, row, meta ) {
				// 		if(data != null){
				// 			var isFree="--";
				// 			if(row.isFree){
				// 				isFree="收费";
				// 			}else{
				// 				isFree="免费";
				// 			}
				// 			return isFree;
				// 		}
				//
				//     }
				// },
				// {
				// 	data:null,
				// 	orderable: false,
				// 	render: function ( data, type, row, meta ) {
				// 		if(data != null){
				// 			var total_budget="--";
				// 			if(row.total_budget!=""&&row.total_budget!=null){
				// 				total_budget=row.total_budget;
				// 			}
				// 			return total_budget;
				// 		}
				//
				//     }
				// },
				// {
				// 	data:null,
				// 	orderable: false,
				// 	render: function ( data, type, row, meta ) {
				// 		if(data != null){
				// 			var dailybudget="--";
				// 			if(row.dailybudget!=""&&row.dailybudget!=null){
				// 				dailybudget=row.dailybudget;
				// 			}
				// 			return dailybudget;
				// 		}
				//
				//     }
				// },
				{
					data:null,
					orderable: false,
					render: function ( data, type, row, meta ) {
						if(data != null){
							return row.begin_date+"至"+row.end_date;
						}

					}
				},
				{data:'pv'},
				{data:'click'},
				{
					data:'ctr',
					render: function ( data, type, row, meta ) {
						var temp = row.ctr*100 + "";
						if(temp.length>4){
							temp = temp.substring(0,4);
						}
						var res = temp + "%";
						return res;
					},

				},
				{
					data:null,
					defaultContent: '按钮',
					orderable: false,
					render: function ( data, type, row, meta ) {
						if(data != null){
                            var updateBtn = '';
                            var deleteBtn = '';
							if(language == "English"){
                                if (editPermision) {
                                    updateBtn = '<a class="btn btn-default" href="strategy/toAdd/' + $basicParameters.val() + '?id=' + row.id + '&websiteId=' + $websiteId.val() + '" style="background-color: #a1a0b2"><img src="./a/img/bianji.png" style="width: 14px;height: 14px;">Edit</a>';
                                }
                                if (deletePermision) {
                                    deleteBtn = '<a class="btn btn-default" link="strategy/delete/' + $basicParameters.val() + '?id=' + row.id + '" onclick="strategyPage.deleteStrategy(this);" href="javascript:void(0);"><img src="./a/img/delete.png" style="width: 14px;height: 14px;">Delete</a>';
                                }
							}else{
                                if (editPermision) {
                                    updateBtn = '<a class="btn btn-default" onclick="revamp(this)" style="background-color: #a1a0b2"><img src="./a/img/bianji.png" style="width: 14px;height: 14px;">修改</a>';
                                }
                                if (deletePermision) {
                                    /*	var updateThemeBtn = '<a href="strategy/copy/'+$basicParameters.val()+'?id='+row.id+'">复制</a>'; + updateThemeBtn*/
                                    deleteBtn = '<a class="btn btn-default" link="strategy/delete/' + $basicParameters.val() + '?id=' + row.id + '" onclick="strategyPage.deleteStrategy(this);" href="javascript:void(0);"><img src="./a/img/delete.png" style="width: 14px;height: 14px;">删除</a>';
                                }
							}

							return updateBtn +"&nbsp;" +"&nbsp;"+  deleteBtn;
						}

					},
				}
			],
			processing: true,
			serverSide: true,
//			searchDelay: 3000, //减少服务器压力, 查询延时 3S

			ajax: {
				url: "strategy/customerPage/"+$basicParameters.val()+"?strategyIds="+strategyIds,
				type: "POST",
				data: function(d) { // 动态的更新提交的参数
//					d.orderId = $orderId.val();
				}
			}
		};
		$table.dataTable(Common.getDefaultDataTableOptions(options));
		$table.on("draw.dt", function() { //表格重绘之后
			// 物料列表开关
			var $switch = $('.switch input[type="checkbox"]');
			$switch.bootstrapSwitch({
				size: 'mini',
				labelWidth: 20
			});
			// 状态开关点击事件
			$('.bootstrap-switch-container span').click(function(e) {
				var $checkbox = $(this).parent().find('input[type="checkbox"]');
                if ($checkbox.attr('disabled') == 'disabled') {
                    return false;
                }
				var state = $checkbox.bootstrapSwitch('state');


                var stateName = $(this);
				layer.confirm('确认调整内容状态？', {icon: 3, title:'温馨提示', moveType: 1}, function(index) {
					var id = $checkbox.attr("id");
					var value = state ;
					var callback = function(data) {
						if (data) {
							if (data.success) {
								var name="";
								if(value){
									name="开启";
								}else{
									name="关闭";
								}
								//变更文字状态
								$(stateName).parent().parent().next().html(name);
								Common.success(data.msg);
							} else {
								Common.error(data.msg);
								$checkbox.bootstrapSwitch('state', !state);
							}
						} else {
							Common.error("内容状态修改失败，请稍后尝试!");
							$checkbox.bootstrapSwitch('state', !state);
						}
					}
					Common.doAjax("/strategy/changeActive/"+$basicParameters.val(), callback, {id: id, active: value});
					layer.close(index);
				}, function(index) {
					$checkbox.bootstrapSwitch('state', !state);
					Common.msg("放弃修改，内容状态复原。");
					layer.close(index);
				});
			});
		});
	}

	/**
	 * 删除内容
	 */
	me.deleteStrategy = function(obj){
		if(language == "English"){
			layer.confirm('Confirm Deletion?', {icon: 3, title:'Tips', moveType: 1 ,btn:["Yes","No"]}, function(index) {
				window.location.href=$(obj).attr("link");
			}, function(index) {
				layer.close(index);
			});
		}else{
			layer.confirm('确认删除该内容？', {icon: 3, title:'温馨提示', moveType: 1}, function(index) {
				window.location.href=$(obj).attr("link");
			}, function(index) {
				layer.close(index);
			});
		}

	}
	return me;
}( strategyPage || {}));
//修改按钮
function revamp(obj) {
    var page_number;
    var size_number;

        var table = $('#strategyTable').DataTable();
        var oSettings = table.fnSettings();
        // 获取页码值
        page_number=oSettings._iDisplayStart;
        console.log(page_number);

        // 获取页面分割长度
        size_number=oSettings._iDisplayLength;
        console.log(oSettings._iDisplayLength);

    var strUrl= "strategy/toAdd/";
    var $basicParameters=$("#basicParameters");//基础数据 广告主 订单 计划
    var $websiteId = $("#websiteId");
    var $id = $(obj).parents("tr").children("td").eq(0).text();

    location.href =strUrl + $basicParameters.val() + '?id=' + $id + '&websiteId=' + $websiteId.val()+"&pagenum="+page_number+"&sizenumber="+size_number;
};