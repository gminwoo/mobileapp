"use strict";
window.addEventListener("DOMContentLoaded",
    function() {
                // ヘッダーのテキストエフェクト
        $("shutter opening"){
            loop: false, // ループのオンオフ
            minDisplayTime: 6000, // テキストが置き換えられるまでの表示時間
            initialDelay: 6000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            
        });
          
		setTimeout(
			function(){
		let popMessage="いらっしゃい!おみくじ引いてって!";
		window.alert(popMessage);
			},
			"6000"
		);
    },false
);