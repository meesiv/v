// هنا نضع البيانات "الوهمية" يدوياً لكي لا نحتاج لملفات JSON أو PDF
const myData = [
    { id: 1, name: "اللغة العربية" },
    { id: 2, name: "اللغة الإنكليزية" },
    { id: 3, name: "الأحياء" },
    { id: 4, name: "الكيمياء" },
    { id: 5, name: "الفيزياء" }
];

// دالة تظهر المواد في الشاشة الرئيسية
function showSubjects() {
    const container = document.getElementById('subjects-list');
    container.innerHTML = '';
    myData.forEach(subject => {
        const div = document.createElement('div');
        div.className = 'subject-card';
        div.innerText = subject.name;
        // عند الضغط على المادة
        div.onclick = () => openSubject(subject);
        container.appendChild(div);
    });
}

// دالة تفتح المادة وتخفي الرئيسية
function openSubject(subject) {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('subject-screen').style.display = 'block';
    document.getElementById('subject-title').innerText = subject.name;
    
    // هنا نضع أقسام وهمية للمادة (مثلاً القواعد والأدب)
    const sectionsContainer = document.getElementById('sections-list');
    sectionsContainer.innerHTML = '';
    const fakeSections = ["الجزء الأول", "الجزء الثاني"];
    
    fakeSections.forEach(sec => {
        const div = document.createElement('div');
        div.className = 'list-card';
        div.innerText = sec;
        sectionsContainer.appendChild(div);
    });
}

// زر الرجوع
document.getElementById('back-btn').onclick = () => {
    document.getElementById('subject-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
};

// تشغيل التطبيق
showSubjects();