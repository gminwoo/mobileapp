"use strict";
window.addEventListener("DOMContentLoaded",
    function() {
                // ヘッダーのテキストエフェクト
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 10000, // テキストが置き換えられるまでの表示時間
            initialDelay: 10000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
            delayScale: 3, // 遅延時間の指数
            delay: 1000, // 文字ごとの遅延時間
            sync: false, // trueはアニメーションをすべての文字に同時に適用
            shuffle: true // trueは文字を順番にではなく、ランダムに
            }
            });        
            setTimeout(
                function(){
            let popMessage="いらっしゃい!おみくじ引いてって!";
            window.alert(popMessage);
                },
                "5000"
            );
    },false
);