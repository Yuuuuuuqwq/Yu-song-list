

const songs = [
    {
        title: "0321",
        singer:"space x",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    
    /*{
        title: " 1022-比爾的歌",
        singer:"Bomb比爾",
        genre: ["抒情Lyric","流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },*/
    {
        title: "123我爱妳",
        singer:"新樂塵符",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },
    /*{
        title: "22秒",
        singer:"Aioz",
        genre: ["流行Pop", "抒情Lyric"],
        crown: "",
        note: ""
    },*/
    {
        title: "24/7, 365",
        singer:"Elijah Woods",
        genre: ["抒情Lyric","流行Pop","ENG","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "32度的晚風",
        singer:"陸傑awr",
        genre: ["抒情Lyric", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "5:20A.M.",
        singer:"soldier",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },
    /*{
        title: "7%",
        singer:"XMASwu",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },*/
    {
        title: "Dadi",
        singer:"KIRE",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },
    {
        title: "Love Story",
        singer:"Taylor Swift",
        genre: ["流行Pop", "抒情Lyric", "ENG"],
        crown: "",
        note: ""
    },
    {
        title: "Night Changes",
        singer:"One Direction",
        genre: ["流行Pop", "抒情Lyric", "ENG"],
        crown: "",
        note: ""
    },
    {
        title: "Trust Me",
        singer:"sunkis 宋秉勤",
        genre: ["抒情Lyric", "ENG","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "TA",
        singer:"不是花火呀",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },
    /*{
        title: "肯定",
        singer:"RE-D/是二哈ya/masta",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },*/
    {
        title: "靠近",
        singer:"一口甜 & 二辰",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },
    {
        title: "流沙",
        singer:"小阿七",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "年輪",
        singer:"杜宣達",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "指紋",
        singer:"汪苏泷",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "晚安",
        singer:"顏人中",
        genre: ["抒情Lyric", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "有些",
        singer:"顏人中",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "想說",
        singer:"顏人中",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "嗜好",
        singer:"顏人中",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "慢慢",
        singer: "顏人中",
        genre: ["抒情Lyric", "流行Pop","EMO"],
        crown: "",
        note: ""
    },
    /*{
        title: "慢慢",
        singer: "Uu",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "玻璃",
        singer:"Gareth.T",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "情歌",
        singer:"梁靜茹",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "東西",
        singer:"林俊呈",
        genre: ["流行Pop", "可愛Cute","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "身後",
        singer:"space x",
        genre: ["流行Pop", "抒情Lyric"],
        crown: "",
        note: ""
    },
    {
        title: "女孩",
        singer:"韦礼安",
        genre: ["流行Pop", "可愛Cute","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "白鴿",
        singer:"你的上好佳",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "於是",
        singer:"鄭潤澤",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "七寸",
        singer:"甜老虎",
        genre: ["流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "唯一",
        singer:"告五人",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "嘉賓",
        singer:"張遠",
        genre: ["抒情Lyric", "流行Pop","EMO"],
        crown: "",
        note: ""
    },
    {
        title: "寵壞",
        singer:"李俊佑/小潘潘",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },
    /*{
        title: "忍住",
        singer: "司馬缸砸光",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "如願",
        singer:"王菲",
        genre: ["抒情Lyric","EMO"],
        crown: "",
        note: ""
    },
    /*{
        title: "多幸運",
        singer:"韩安旭",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },*/
    {
        title: "從前說",
        singer: "小阿七",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "小時光",
        singer: "yihuik苡慧,胡期皓",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: "唱女聲"
    },
    {
        title: "圈住你",
        singer: "一口甜",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "我們倆",
        singer: "郭頂",
        genre: ["抒情Lyric", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "我會等",
        singer: "承桓",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "小氣鬼",
        singer: "葛雨晴",
        genre: ["抒情Lyric", "可愛Cute"],
        crown: "",
        note: ""
    },
    {
        title: "小氣鬼",
        singer: "王澳楠EVE",
        genre: ["抒情Lyric", "可愛Cute"],
        crown: "",
        note: ""
    },
    {
        title: "一點點",
        singer: "董唧唧/芊芊龍",
        genre: ["流行Pop", "可愛Cute","推薦"],
        crown: "",
        note: "唱女聲、偏短"
    },
    /*{
       title: "小酒窩",
        singer: "林俊傑&蔡卓妍",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: "唱女聲"
    },*/
    /*{
        title: "氧化氫",
        singer: "李尖尖",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },*/
    {
        title: "兩三句",
        singer: "宋佳野",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "小哥哥",
        singer: "胡艾彤",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "有點甜",
        singer: "汪苏泷",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "膽小鬼",
        singer: "顏人中",
        genre: ["抒情Lyric","可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "小幸運",
        singer: "田馥甄",
        genre: ["抒情Lyric","流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "靜悄悄",
        singer: "大泫",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "褪黑素",
        singer: "江皓南",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "红昭愿",
        singer: "王梓钰",
        genre: ["流行Pop","古風"],
        crown: "",
        note: ""
    },
    {
        title: "年齡差",
        singer: "番茄貝果",
        genre: ["流行Pop","可愛Cute"],
        crown: "",
        note: ""
    },
    /*{
        title: "浪漫愛",
        singer: "江語晨",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: "學歌中-勿點"
    },*/
    /*{
        title: "戀人未滿",
        singer: "S.H.E",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    /*{
        title: "我想擺爛",
        singer: "賀子玲",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },*/
    {
        title: "星空剪影",
        singer: "蓝心羽",
        genre: ["抒情Lyric", "可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "星光舞會",
        singer: "趙希予",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "專屬天使",
        singer: "TANK",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "甜甜咸咸",
        singer: "赵芷彤",
        genre: ["抒情Lyric", "可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "愛丫愛丫",
        singer: "BY2",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "氣象站台",
        singer: "Uu",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "今夜有雨",
        singer: "h3R3",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "戀愛畫板",
        singer: "錦零",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "晚風告白",
        singer: "李佳薇",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: "R&B"
    },*/
    /*{
        title: "甲乙丙丁",
        singer: "星野",
        genre: ["抒情Lyric",  "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "特別關係",
        singer: "都智文/永彬Ryan.B",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "有何不可",
        singer: "封茗囧菌",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "晚安晚安",
        singer: "小三金",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "愛的魔法",
        singer: "金莎",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "特別的人",
        singer: "方大同",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "如果可以",
        singer: "韦礼安",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "消散對白",
        singer: "丁禹兮",
        genre: ["抒情Lyric","EMO"],
        crown: "",
        note: ""
    },
    {
        title: "戀愛告急",
        singer: "鞠婧禕",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "愛人錯過",
        singer: "告五人",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "無樂不作",
        singer: "范逸臣",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "左邊的人",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
     {
        title: "這麼多年",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "陪你到這",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "你想要的",
        singer: "顏人中",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "熬夜上癮",
        singer:"刘亦心",
        genre: ["流行Pop", "可愛Cute"],
        crown: "",
        note: ""
    },
    {
        title: "海綿寶寶",
        singer:"汪苏泷",
        genre: ["流行Pop", "可愛Cute","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "自娛自樂",
        singer: "金志文",
        genre: ["流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "失眠飛行",
        singer: "沈以誠、薛明媛",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: "唱女聲"
    },
    /*{
        title: "朝夕與你",
        singer: "小藍背心",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "超喜歡你",
        singer: "飛輪海",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "處處遺憾",
        singer: "顏人中",
        genre: ["抒情Lyric", "流行Pop","EMO"],
        crown: "",
        note: ""
    },
    {
        title: "卡加布列島",
        singer: "YOYOTV",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "未來式情歌",
        singer: "零6&呂帥&陸怡雯",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: "唱女聲、偏短"
    },
    {
        title: "害怕失去妳",
        singer: "Aioz / YangYang",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "熱戀說明書",
        singer: "芊芊龍 / 董唧唧",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: "唱女聲"
    },
    {
        title: "讓風告訴你",
        singer: "花玲 / 喵☆醬 / 宴寧 / kinsen",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "風月吻眉梢",
        singer: "禮越",
        genre: ["流行Pop","古風"],
        crown: "",
        note: ""
    },
    /*{
        title: "孤單北半球",
        singer: "林依晨",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    /*{
        title: "只對你偏愛",
        singer: "承桓",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "愛的就是你",
        singer: "王力宏",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "目及皆是你",
        singer: "小藍背心",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "熱戀冰淇淋",
        singer: "yihuik苡慧",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "蔚蓝色的海",
        singer: "夏伟淳LAH",
        genre: ["抒情Lyric","可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "捨不得的時刻",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "短暫的愛過我",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "如果我很平庸",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我是你的小狗",
        singer: "西彬",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    /*{
        title: "像晴天像雨天",
        singer: "汪苏泷",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "少女做妖日記",
        singer: "糯米Nomi",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "阿拉斯加海灣",
        singer: "菲道爾",
        genre: ["抒情Lyric","EMO"],
        crown: "",
        note: ""
    },
    {
        title: "雨是神的煙花",
        singer: "Nyxx.",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "被神明寫的歌",
        singer: "K.D",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "我把我留在那了",
        singer: "陳華",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    /*{
        title: "看著我的眼睛說",
        singer: "張遠",
        genre: ["抒情Lyric", "EMO"],
        crown: "",
        note: ""
    },*/
    {
        title: "夏夜最後的煙火",
        singer: "顏人中",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "某年某月某天",
        singer: "顏人中",
        genre: ["抒情Lyric", "流行Pop", "EMO"],
        crown: "",
        note: ""
    },
    /*{
        title: "愛的雙重魔力",
        singer: "BY2",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "迪士尼在逃公主",
        singer: "徐秉龍",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "放個大招給你看",
        singer: "永彬Ryan.B",
        genre: ["可愛Cute", "流行Pop","推薦"],
        crown: "",
        note: ""
    },
    {
        title: "零几年听的情歌",
        singer: "AY楊佬叁",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "滿天星辰不及你",
        singer: "ycccc",
        genre: ["抒情Lyric","EMO"],
        crown: "",
        note: ""
    },*/
    {
        title: "刻在我心底的名字",
        singer: "盧廣仲",
        genre: ["抒情Lyric", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "输入法打可爱按第五",
        singer: "《创造营2021》",
        genre: ["可愛Cute", "流行Pop"],
        crown: "",
        note: ""
    },
    {
        title: "想和你看五月的晚霞",
        singer: "陳華",
        genre: ["抒情Lyric","流行Pop"],
        crown: "",
        note: ""
    },
    /*{
        title: "想見你想見你想見你",
        singer: "八三夭",
        genre: ["抒情Lyric","流行Pop"],
        crown: "",
        note: ""
    },*/
    {
        title: "想和你看五月的晚霞:夏日序章",
        singer: "陳華",
        genre: ["抒情Lyric","流行Pop","推薦"],
        crown: "",
        note: ""
    },
    
];



const songList = document.getElementById("song-list");
const searchInput = document.getElementById("song-search");
const genreButtons = document.querySelectorAll("[data-genre]");

// 記錄目前選擇的歌曲類型
let selectedGenre = "全部";

// 顯示歌曲
function renderSongs() {
    // 取得搜尋框裡的文字
    const keyword = searchInput.value.trim().toLowerCase();

    // 篩選歌曲
    const filteredSongs = songs.filter(function(song) {
        // 檢查歌曲類型
        const matchGenre =
            selectedGenre === "全部" ||
            song.genre.includes(selectedGenre);

        // 檢查搜尋關鍵字
        const searchableText = [
            song.title,
            song.singer,
            song.crown,
            song.note,
            ...song.genre
        ].join(" ").toLowerCase();

        const matchSearch =
            searchableText.includes(keyword);

        // 類型與搜尋都符合才顯示
        return matchGenre && matchSearch;
    });

    // 清空舊的歌曲列表
    songList.replaceChildren();

    // 如果沒有符合的歌曲
    if (filteredSongs.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "找不到符合條件的歌曲。";

        row.appendChild(cell);
        songList.appendChild(row);
        return;
    }

    // 逐首歌曲建立表格列
    filteredSongs.forEach(function(song) {
        const row = document.createElement("tr");

        [
            song.title,
            song.singer,
            song.crown || "—",
            song.note || "—"
        ].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        songList.appendChild(row);
    });
}

// 點擊歌曲類型按鈕
genreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedGenre = button.dataset.genre;

        // 更新按鈕的選中外觀
        genreButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        // 重新顯示符合條件的歌曲
        renderSongs();
    });
});

// 輸入搜尋文字時即時更新
searchInput.addEventListener("input", renderSongs);

// 網頁載入後先顯示全部歌曲
renderSongs();
// 找到隨機選歌按鈕
const randomButton = document.querySelector(".random-btn");

// 點擊按鈕時，隨機選一首歌
randomButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    alert("🎵 隨機選到的歌曲是：\n" + randomSong.title + " - " + randomSong.singer);
});

