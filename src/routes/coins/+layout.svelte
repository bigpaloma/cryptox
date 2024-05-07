<div class="flex">
    <div class="background opacity-60 -z-10">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="relative z-10 opacity-[0.98] w-10/12 mx-auto">
        <slot />
    </div>
</div>

<style>
    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }

    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #3e1e68;
        overflow: hidden;
    }

    .background span {
        width: 9vmin;
        height: 9vmin;
        border-radius: 9vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 6;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .background span:nth-child(0) {
        color: #ffacac;
        top: 52%;
        left: 71%;
        animation-duration: 144s;
        animation-delay: -57s;
        transform-origin: 21vw -16vh;
        box-shadow: 18vmin 0 2.6112397458328642vmin currentColor;
    }
    .background span:nth-child(1) {
        color: #583c87;
        top: 90%;
        left: 91%;
        animation-duration: 111s;
        animation-delay: -230s;
        transform-origin: 21vw -24vh;
        box-shadow: 18vmin 0 2.4777190525687462vmin currentColor;
    }
    .background span:nth-child(2) {
        color: #583c87;
        top: 49%;
        left: 85%;
        animation-duration: 162s;
        animation-delay: -166s;
        transform-origin: 10vw -21vh;
        box-shadow: -18vmin 0 2.776266353751503vmin currentColor;
    }
    .background span:nth-child(3) {
        color: #e45a84;
        top: 80%;
        left: 19%;
        animation-duration: 322s;
        animation-delay: -12s;
        transform-origin: 18vw -19vh;
        box-shadow: 18vmin 0 2.431902280534854vmin currentColor;
    }
    .background span:nth-child(4) {
        color: #e45a84;
        top: 39%;
        left: 20%;
        animation-duration: 112s;
        animation-delay: -281s;
        transform-origin: -20vw -12vh;
        box-shadow: 18vmin 0 2.2585370715430284vmin currentColor;
    }
    .background span:nth-child(5) {
        color: #583c87;
        top: 17%;
        left: 63%;
        animation-duration: 131s;
        animation-delay: -200s;
        transform-origin: -1vw -18vh;
        box-shadow: 18vmin 0 2.6176688719704297vmin currentColor;
    }
    .background span:nth-child(6) {
        color: #e45a84;
        top: 70%;
        left: 52%;
        animation-duration: 99s;
        animation-delay: -324s;
        transform-origin: -5vw -23vh;
        box-shadow: -18vmin 0 2.6979688519719645vmin currentColor;
    }
    .background span:nth-child(7) {
        color: #ffacac;
        top: 64%;
        left: 7%;
        animation-duration: 109s;
        animation-delay: -84s;
        transform-origin: 25vw -20vh;
        box-shadow: -18vmin 0 2.765884329828621vmin currentColor;
    }
    .background span:nth-child(8) {
        color: #583c87;
        top: 27%;
        left: 83%;
        animation-duration: 20s;
        animation-delay: -97s;
        transform-origin: -16vw -5vh;
        box-shadow: 18vmin 0 2.59076298614766vmin currentColor;
    }
    .background span:nth-child(9) {
        color: #e45a84;
        top: 8%;
        left: 28%;
        animation-duration: 321s;
        animation-delay: -115s;
        transform-origin: 8vw 18vh;
        box-shadow: -18vmin 0 2.607932226986045vmin currentColor;
    }
    .background span:nth-child(10) {
        color: #e45a84;
        top: 23%;
        left: 17%;
        animation-duration: 243s;
        animation-delay: -215s;
        transform-origin: 11vw 25vh;
        box-shadow: 18vmin 0 2.740821147891601vmin currentColor;
    }
    .background span:nth-child(11) {
        color: #583c87;
        top: 44%;
        left: 56%;
        animation-duration: 17s;
        animation-delay: -65s;
        transform-origin: -10vw 13vh;
        box-shadow: 18vmin 0 2.7721616070538113vmin currentColor;
    }
    .background span:nth-child(12) {
        color: #ffacac;
        top: 58%;
        left: 45%;
        animation-duration: 87s;
        animation-delay: -297s;
        transform-origin: -7vw -15vh;
        box-shadow: 18vmin 0 3.11689838238658vmin currentColor;
    }
    .background span:nth-child(13) {
        color: #e45a84;
        top: 29%;
        left: 59%;
        animation-duration: 432s;
        animation-delay: -141s;
        transform-origin: -11vw -15vh;
        box-shadow: -18vmin 0 2.520544088587885vmin currentColor;
    }
    .background span:nth-child(14) {
        color: #ffacac;
        top: 22%;
        left: 79%;
        animation-duration: 30s;
        animation-delay: -215s;
        transform-origin: -13vw -17vh;
        box-shadow: -18vmin 0 2.5222820460470454vmin currentColor;
    }
    .background span:nth-child(15) {
        color: #e45a84;
        top: 81%;
        left: 62%;
        animation-duration: 373s;
        animation-delay: -156s;
        transform-origin: 1vw 7vh;
        box-shadow: 18vmin 0 2.600699693944036vmin currentColor;
    }
    .background span:nth-child(16) {
        color: #e45a84;
        top: 25%;
        left: 68%;
        animation-duration: 231s;
        animation-delay: -408s;
        transform-origin: 16vw 23vh;
        box-shadow: -18vmin 0 2.759450045543699vmin currentColor;
    }
    .background span:nth-child(17) {
        color: #583c87;
        top: 48%;
        left: 62%;
        animation-duration: 268s;
        animation-delay: -218s;
        transform-origin: 13vw 8vh;
        box-shadow: 18vmin 0 2.5259708609789877vmin currentColor;
    }
    .background span:nth-child(18) {
        color: #e45a84;
        top: 45%;
        left: 81%;
        animation-duration: 101s;
        animation-delay: -399s;
        transform-origin: 24vw -22vh;
        box-shadow: -18vmin 0 2.7605314797152687vmin currentColor;
    }
    .background span:nth-child(19) {
        color: #ffacac;
        top: 45%;
        left: 15%;
        animation-duration: 198s;
        animation-delay: -406s;
        transform-origin: 10vw -22vh;
        box-shadow: 18vmin 0 2.751430408972733vmin currentColor;
    }
    .background span:nth-child(20) {
        color: #e45a84;
        top: 27%;
        left: 13%;
        animation-duration: 383s;
        animation-delay: -116s;
        transform-origin: -6vw -10vh;
        box-shadow: 18vmin 0 3.1260939717602754vmin currentColor;
    }
    .background span:nth-child(21) {
        color: #e45a84;
        top: 4%;
        left: 39%;
        animation-duration: 220s;
        animation-delay: -111s;
        transform-origin: 7vw -15vh;
        box-shadow: -18vmin 0 2.4035695451456136vmin currentColor;
    }
    .background span:nth-child(22) {
        color: #e45a84;
        top: 14%;
        left: 49%;
        animation-duration: 265s;
        animation-delay: -403s;
        transform-origin: -13vw 7vh;
        box-shadow: -18vmin 0 2.9509368163648593vmin currentColor;
    }
    .background span:nth-child(23) {
        color: #ffacac;
        top: 11%;
        left: 29%;
        animation-duration: 229s;
        animation-delay: -229s;
        transform-origin: -23vw 16vh;
        box-shadow: -18vmin 0 2.745416600315428vmin currentColor;
    }
    .background span:nth-child(24) {
        color: #e45a84;
        top: 44%;
        left: 20%;
        animation-duration: 355s;
        animation-delay: -376s;
        transform-origin: 24vw -5vh;
        box-shadow: 18vmin 0 2.8385034812942496vmin currentColor;
    }
    .background span:nth-child(25) {
        color: #ffacac;
        top: 7%;
        left: 14%;
        animation-duration: 444s;
        animation-delay: -33s;
        transform-origin: -9vw 1vh;
        box-shadow: 18vmin 0 2.4210754599420214vmin currentColor;
    }
    .background span:nth-child(26) {
        color: #583c87;
        top: 42%;
        left: 85%;
        animation-duration: 265s;
        animation-delay: -159s;
        transform-origin: -14vw 16vh;
        box-shadow: 18vmin 0 2.8939580170781305vmin currentColor;
    }
    .background span:nth-child(27) {
        color: #e45a84;
        top: 60%;
        left: 17%;
        animation-duration: 294s;
        animation-delay: -183s;
        transform-origin: 4vw -5vh;
        box-shadow: -18vmin 0 2.473239277511464vmin currentColor;
    }
    .background span:nth-child(28) {
        color: #ffacac;
        top: 74%;
        left: 18%;
        animation-duration: 272s;
        animation-delay: -208s;
        transform-origin: 5vw -11vh;
        box-shadow: 18vmin 0 2.9268501382437218vmin currentColor;
    }
    .background span:nth-child(29) {
        color: #e45a84;
        top: 72%;
        left: 7%;
        animation-duration: 48s;
        animation-delay: -133s;
        transform-origin: -22vw -20vh;
        box-shadow: 18vmin 0 3.241045700481387vmin currentColor;
    }
    .background span:nth-child(30) {
        color: #e45a84;
        top: 60%;
        left: 30%;
        animation-duration: 41s;
        animation-delay: -395s;
        transform-origin: 13vw 8vh;
        box-shadow: -18vmin 0 2.7933225117523586vmin currentColor;
    }
    .background span:nth-child(31) {
        color: #e45a84;
        top: 78%;
        left: 93%;
        animation-duration: 253s;
        animation-delay: -154s;
        transform-origin: 14vw 14vh;
        box-shadow: -18vmin 0 2.478376774823894vmin currentColor;
    }
    .background span:nth-child(32) {
        color: #e45a84;
        top: 64%;
        left: 55%;
        animation-duration: 306s;
        animation-delay: -222s;
        transform-origin: -10vw 13vh;
        box-shadow: -18vmin 0 3.1358997923906293vmin currentColor;
    }
    .background span:nth-child(33) {
        color: #583c87;
        top: 39%;
        left: 88%;
        animation-duration: 225s;
        animation-delay: -257s;
        transform-origin: -12vw -18vh;
        box-shadow: 18vmin 0 2.8054607585434077vmin currentColor;
    }
    .background span:nth-child(34) {
        color: #583c87;
        top: 65%;
        left: 54%;
        animation-duration: 202s;
        animation-delay: -95s;
        transform-origin: -7vw 9vh;
        box-shadow: -18vmin 0 2.578970867879686vmin currentColor;
    }
    .background span:nth-child(35) {
        color: #583c87;
        top: 54%;
        left: 60%;
        animation-duration: 318s;
        animation-delay: -420s;
        transform-origin: -17vw 14vh;
        box-shadow: -18vmin 0 2.942415635661783vmin currentColor;
    }
    .background span:nth-child(36) {
        color: #e45a84;
        top: 38%;
        left: 66%;
        animation-duration: 146s;
        animation-delay: -391s;
        transform-origin: 18vw 25vh;
        box-shadow: 18vmin 0 2.6276803368316193vmin currentColor;
    }
    .background span:nth-child(37) {
        color: #583c87;
        top: 15%;
        left: 64%;
        animation-duration: 105s;
        animation-delay: -343s;
        transform-origin: 13vw -21vh;
        box-shadow: 18vmin 0 3.105896120283792vmin currentColor;
    }
    .background span:nth-child(38) {
        color: #ffacac;
        top: 25%;
        left: 76%;
        animation-duration: 314s;
        animation-delay: -294s;
        transform-origin: -15vw -5vh;
        box-shadow: 18vmin 0 2.2590690048827318vmin currentColor;
    }
    .background span:nth-child(39) {
        color: #583c87;
        top: 50%;
        left: 80%;
        animation-duration: 165s;
        animation-delay: -246s;
        transform-origin: -15vw -22vh;
        box-shadow: -18vmin 0 3.095343101259261vmin currentColor;
    }
    .background span:nth-child(40) {
        color: #e45a84;
        top: 16%;
        left: 13%;
        animation-duration: 109s;
        animation-delay: -65s;
        transform-origin: -7vw 0vh;
        box-shadow: -18vmin 0 3.1768489823686767vmin currentColor;
    }
    .background span:nth-child(41) {
        color: #ffacac;
        top: 54%;
        left: 31%;
        animation-duration: 299s;
        animation-delay: -85s;
        transform-origin: -18vw 15vh;
        box-shadow: -18vmin 0 2.8060862292970596vmin currentColor;
    }
    .background span:nth-child(42) {
        color: #583c87;
        top: 10%;
        left: 81%;
        animation-duration: 431s;
        animation-delay: -400s;
        transform-origin: -9vw 22vh;
        box-shadow: -18vmin 0 2.840581078787487vmin currentColor;
    }
    .background span:nth-child(43) {
        color: #e45a84;
        top: 1%;
        left: 45%;
        animation-duration: 37s;
        animation-delay: -259s;
        transform-origin: -16vw -17vh;
        box-shadow: -18vmin 0 2.8329414850825336vmin currentColor;
    }
    .background span:nth-child(44) {
        color: #ffacac;
        top: 21%;
        left: 71%;
        animation-duration: 48s;
        animation-delay: -157s;
        transform-origin: -2vw 0vh;
        box-shadow: 18vmin 0 2.303725243308026vmin currentColor;
    }
    .background span:nth-child(45) {
        color: #583c87;
        top: 82%;
        left: 77%;
        animation-duration: 206s;
        animation-delay: -212s;
        transform-origin: -14vw 18vh;
        box-shadow: -18vmin 0 3.1135814431337705vmin currentColor;
    }
    .background span:nth-child(46) {
        color: #ffacac;
        top: 6%;
        left: 63%;
        animation-duration: 421s;
        animation-delay: -354s;
        transform-origin: -20vw -22vh;
        box-shadow: 18vmin 0 2.6891872188285535vmin currentColor;
    }
    .background span:nth-child(47) {
        color: #ffacac;
        top: 79%;
        left: 19%;
        animation-duration: 169s;
        animation-delay: -97s;
        transform-origin: 9vw 12vh;
        box-shadow: -18vmin 0 2.7821961191074065vmin currentColor;
    }
    .background span:nth-child(48) {
        color: #583c87;
        top: 49%;
        left: 59%;
        animation-duration: 31s;
        animation-delay: -215s;
        transform-origin: 14vw -18vh;
        box-shadow: -18vmin 0 2.5426592445356238vmin currentColor;
    }
</style>
