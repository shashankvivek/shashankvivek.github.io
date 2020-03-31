
		
var app = angular.module('myApp', [ 'leaf' ]);

app.controller('MainCtrl',function($scope){
	this.userTxt = 'Hi There <b>Shashank Vivek.</b><br><img style="max-height: 200px;max-width:200px"  src="http://images4.alphacoders.com/206/20658.jpg"><br>Follow below steps to enter into office premises:<br><br>&nbsp;1.&nbsp; Get your bag checked<br>&nbsp;2.&nbsp; Show your ID card.<br>&nbsp;3. Swap<u> your card to open the door</u>.<br>&nbsp;4. <i>Go to your desk and switch on the <b>machine.<br><br></b></i><style>td img {max-width:100%;height:auto;}</style><table style="table-layout: fixed; word-wrap: break-word;text-align: center;width:25%" class="table table-bordered"><thead><tr style="background-color: #e9ecef"><th style="table-layout: fixed; word-wrap: break-word;text-align: center;">Col 1</th><th style="table-layout: fixed; word-wrap: break-word;text-align: center;">Col 2</th><th style="table-layout: fixed; word-wrap: break-word;text-align: center;">Col 3</th></tr></thead><tbody><tr><td>Row 11</td><td>Row 12</td><td>Row 13</td></tr><tr></tr><tr><td>Row 21</td><td>Row 22</td><td>Row 23</td></tr><tr></tr><tr><td>Row 31</td><td>Row 32</td><td>Row 33</td></tr><tr></tr></tbody></table>';
//	this.userTxt = '<style>td img {max-width:100%;height:auto;}</style><table style="table-layout: fixed; word-wrap: break-word;text-align: center;width:23%" class="table table-bordered"><thead><tr style="background-color: #e9ecef"><th style="table-layout: fixed; word-wrap: break-word;text-align: center;"></th><th style="table-layout: fixed; word-wrap: break-word;text-align: center;"></th><th style="table-layout: fixed; word-wrap: break-word;text-align: center;"></th><th style="table-layout: fixed; word-wrap: break-word;text-align: center;"></th></tr></thead><tbody><tr><td>12</td><td>23</td><td>45</td><td></td></tr><tr></tr><tr><td></td><td></td><td></td><td></td></tr><tr></tr><tr><td></td><td></td><td></td><td></td></tr><tr></tr></tbody></table>';
//	this.userTxt = "Hi There <b>Shashank Vivek.</b><br><br>Follow below steps to enter into office premises:<br><br>&nbsp;1.&nbsp; Get your bag checked<br>&nbsp;2.&nbsp; Show your ID card.<br>&nbsp;3. Swap<u> your card to open the door</u>.<br>&nbsp;4. <i>Go to your desk and switch on the <b>machine.</b></i>";
})
		

app.controller('UserCtrl',function($scope,$http){
	$http.get("https://api.stackexchange.com/2.1/users/3092377?order=desc&sort=reputation&site=stackoverflow").then(res => {
		this.rep = res.data.items[0].reputation;
		this.gold = res.data.items[0].badge_counts.gold;
		this.silver = res.data.items[0].badge_counts.silver;
		this.bronze = res.data.items[0].badge_counts.bronze;
	},err => {
		alert('There was some error loading reputation from stackoverflow site')
	})
})