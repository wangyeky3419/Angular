$(function(){
	strategyPage.init();
});
var language = $("#language").val();
var strategyIds = $("#strategyIds").val();
var strategyPage = ( function ( me ) {
	var $basicParameters=$("#basicParameters");//�������� ����� ���� �ƻ�
	var $websiteId = $("#websiteId");
	var $table=$("#strategyTable");//table
	/**
	 * ��ʼ�������ϵ�һЩ��Ч�ؼ�
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
									activeStr+='����';
								}else{
									activeStr+='�ر�';
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
							var status="δͶ��";
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
				// 				isFree="�շ�";
				// 			}else{
				// 				isFree="���";
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
							return row.begin_date+"��"+row.end_date;
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
					defaultContent: '��ť',
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
                                    updateBtn = '<a class="btn btn-default" onclick="revamp(this)" style="background-color: #a1a0b2"><img src="./a/img/bianji.png" style="width: 14px;height: 14px;">�޸�</a>';
                                }
                                if (deletePermision) {
                                    /*	var updateThemeBtn = '<a href="strategy/copy/'+$basicParameters.val()+'?id='+row.id+'">����</a>'; + updateThemeBtn*/
                                    deleteBtn = '<a class="btn btn-default" link="strategy/delete/' + $basicParameters.val() + '?id=' + row.id + '" onclick="strategyPage.deleteStrategy(this);" href="javascript:void(0);"><img src="./a/img/delete.png" style="width: 14px;height: 14px;">ɾ��</a>';
                                }
							}

							return updateBtn +"&nbsp;" +"&nbsp;"+  deleteBtn;
						}

					},
				}
			],
			processing: true,
			serverSide: true,
//			searchDelay: 3000, //���ٷ�����ѹ��, ��ѯ��ʱ 3S

			ajax: {
				url: "strategy/customerPage/"+$basicParameters.val()+"?strategyIds="+strategyIds,
				type: "POST",
				data: function(d) { // ��̬�ĸ����ύ�Ĳ���
//					d.orderId = $orderId.val();
				}
			}
		};
		$table.dataTable(Common.getDefaultDataTableOptions(options));
		$table.on("draw.dt", function() { //����ػ�֮��
			// �����б���
			var $switch = $('.switch input[type="checkbox"]');
			$switch.bootstrapSwitch({
				size: 'mini',
				labelWidth: 20
			});
			// ״̬���ص���¼�
			$('.bootstrap-switch-container span').click(function(e) {
				var $checkbox = $(this).parent().find('input[type="checkbox"]');
                if ($checkbox.attr('disabled') == 'disabled') {
                    return false;
                }
				var state = $checkbox.bootstrapSwitch('state');


                var stateName = $(this);
				layer.confirm('ȷ�ϵ�������״̬��', {icon: 3, title:'��ܰ��ʾ', moveType: 1}, function(index) {
					var id = $checkbox.attr("id");
					var value = state ;
					var callback = function(data) {
						if (data) {
							if (data.success) {
								var name="";
								if(value){
									name="����";
								}else{
									name="�ر�";
								}
								//�������״̬
								$(stateName).parent().parent().next().html(name);
								Common.success(data.msg);
							} else {
								Common.error(data.msg);
								$checkbox.bootstrapSwitch('state', !state);
							}
						} else {
							Common.error("����״̬�޸�ʧ�ܣ����Ժ���!");
							$checkbox.bootstrapSwitch('state', !state);
						}
					}
					Common.doAjax("/strategy/changeActive/"+$basicParameters.val(), callback, {id: id, active: value});
					layer.close(index);
				}, function(index) {
					$checkbox.bootstrapSwitch('state', !state);
					Common.msg("�����޸ģ�����״̬��ԭ��");
					layer.close(index);
				});
			});
		});
	}

	/**
	 * ɾ������
	 */
	me.deleteStrategy = function(obj){
		if(language == "English"){
			layer.confirm('Confirm Deletion?', {icon: 3, title:'Tips', moveType: 1 ,btn:["Yes","No"]}, function(index) {
				window.location.href=$(obj).attr("link");
			}, function(index) {
				layer.close(index);
			});
		}else{
			layer.confirm('ȷ��ɾ�������ݣ�', {icon: 3, title:'��ܰ��ʾ', moveType: 1}, function(index) {
				window.location.href=$(obj).attr("link");
			}, function(index) {
				layer.close(index);
			});
		}

	}
	return me;
}( strategyPage || {}));
//�޸İ�ť
function revamp(obj) {
    var page_number;
    var size_number;

        var table = $('#strategyTable').DataTable();
        var oSettings = table.fnSettings();
        // ��ȡҳ��ֵ
        page_number=oSettings._iDisplayStart;
        console.log(page_number);

        // ��ȡҳ��ָ��
        size_number=oSettings._iDisplayLength;
        console.log(oSettings._iDisplayLength);

    var strUrl= "strategy/toAdd/";
    var $basicParameters=$("#basicParameters");//�������� ����� ���� �ƻ�
    var $websiteId = $("#websiteId");
    var $id = $(obj).parents("tr").children("td").eq(0).text();

    location.href =strUrl + $basicParameters.val() + '?id=' + $id + '&websiteId=' + $websiteId.val()+"&pagenum="+page_number+"&sizenumber="+size_number;
};