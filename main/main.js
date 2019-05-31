module.exports = function main(inputs) {

	//1���ж������Ƿ�Ϸ����Ƿ��򷵻�NaN
	if (isValid(inputs) === false) {
		return NaN;
	}
	//2������Ϸ��������г̲����ļ۸�
	return taxiPrice(inputs);
	
};
//����۸�
function taxiPrice(inputs) {
	let distance = inputs.distance;
	let parkTime = inputs.parkTime;
	
	//1����̲������˼�
	//�𲽼� distance<=2��Ҫ�ķ���
	var sum = 6;
	//���distance>8����Ҫ�ķ���
	if (distance > 8) {
		sum += (8-2)*0.8 + (distance-8)*0.8*(1+0.5);
	} 
	//���2<distance<=8����Ҫ�ķ���
	if (distance>2 && distance<=8) {
		sum += (distance-2)*0.8
	}
	
	//2������ͣ�������ķ���
	sum += parkTime*0.25;
		
	return Math.round(sum);
}
//�ж�����Ϸ���
function isValid(inputs) {
	//���������һ���������֣���Ϊ�Ƿ�
	if (typeof inputs.distance!=='number' || typeof inputs.parkTime!=='number') {
		return false;
	}
	//�������������һ��С��0����Ϊ�Ƿ�
	if (inputs.distance<0 || inputs.parkTime<0) {
		return false;
	}
	return true;
}
