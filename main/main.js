module.exports = function main(inputs) {

	//1、判断输入是否合法，非法则返回NaN
	if (isValid(inputs) === false) {
		return NaN;
	}
	//2、输入合法，返回行程产生的价格
	return taxiPrice(inputs);
	
};
//计算价格
function taxiPrice(inputs) {
	let distance = inputs.distance;
	let parkTime = inputs.parkTime;
	
	//1、里程产生的运价
	//起步价 distance<=2需要的费用
	var sum = 6;
	//如果distance>8，需要的费用
	if (distance > 8) {
		sum += (8-2)*0.8 + (distance-8)*0.8*(1+0.5);
	} 
	//如果2<distance<=8，需要的费用
	if (distance>2 && distance<=8) {
		sum += (distance-2)*0.8
	}
	
	//2、加上停车产生的费用
	sum += parkTime*0.25;
		
	return Math.round(sum);
}
//判断输入合法性
function isValid(inputs) {
	//如果两者有一个不是数字，则为非法
	if (typeof inputs.distance!=='number' || typeof inputs.parkTime!=='number') {
		return false;
	}
	//如果两个数字有一个小于0，则为非法
	if (inputs.distance<0 || inputs.parkTime<0) {
		return false;
	}
	return true;
}
