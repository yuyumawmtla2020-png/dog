function showSearch(val) {
    console.log("Searching for: " + val);
    // စာမျက်နှာပေါ်မှာပါ စာသား ပြပေးမှာပါ
    document.getElementById('searchResult').innerText = "Searching for: " + val;
}
function toggleMode() {
    // Body ထဲကို dark-mode ဆိုတဲ့ class သွင်းလိုက်/ထုတ်လိုက် လုပ်တာ
    document.body.classList.toggle("dark-mode");
    
    // ဒါက ညီမလေး အခုနက ပြဿနာဖြစ်နေတဲ့ နောက်ခံအရောင်ကို တိုက်ရိုက်ပြောင်းတာ
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#1a1c2c";
    } else {
        document.body.style.backgroundColor = "white";
    }
}