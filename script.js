const modalData = [
{
    emoji:'💕',
    title:'Kangen Kopi & Space',
    message:'28 November 2025'
},
{
    emoji:'💕',
    title:'Kangen Kopi & Space',
    message:'28 November 2025'
},
{
    emoji:'💕',
    title:'Bakmie Ayam 58',
    message:'14 Desember 2025'
},
{
    emoji:'💕',
    title:'Konaro Coffee & Eatery',
    message:'15 Januari 2026'
},
{
    emoji:'💕',
    title:'Braga',
    message:'15 Januari 2026'
},
{
    emoji:'💕',
    title:'Soomi Soomi Cafe & Dining',
    message:'9 Maret 2026'
}
];

function showModal(index){
    const data = modalData[index];
    document.getElementById('modalEmoji').textContent = data.emoji;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalMessage').textContent = data.message;
    document.getElementById('modal').classList.add('active');
}

function closeModal(){
    document.getElementById('modal').classList.remove('active');
}

function heartExplosion(){
    for(let i=0;i<20;i++){
        const heart=document.createElement('div');
        heart.innerHTML='💖';
        heart.style.position='fixed';
        heart.style.left=Math.random()*100+'vw';
        heart.style.top='100vh';
        heart.style.fontSize='20px';
        heart.style.animation='floatUp 2s linear forwards';
        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),2000);
    }
}

const style=document.createElement('style');
style.innerHTML=`
@keyframes floatUp{
    to{
        transform:translateY(-120vh);
        opacity:0;
    }
}`;
document.head.appendChild(style);