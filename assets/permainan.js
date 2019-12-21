var ul = document.getElementById('ul')
var noScore = document.getElementById('noScore')
var rpScore = document.getElementById('rpScore')
var quizBox = document.getElementById('questionBox')
var desc = document.getElementById('desc')
var gameOver = document.getElementById('gameOver')
var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')
var no1 = document.getElementById('no1')
var no2 = document.getElementById('no2')
var no3 = document.getElementById('no3')
var no4 = document.getElementById('no4')
var no5 = document.getElementById('no5')
var rp1 = document.getElementById('rp1')
var rp2 = document.getElementById('rp2')
var rp3 = document.getElementById('rp3')
var rp4 = document.getElementById('rp4')
var rp5 = document.getElementById('rp5')

var app = {
  scoreList: ['Rp. 100.000', 'Rp. 500.000', 'Rp. 1.000.000', 'Rp. 5.000.000', 'Rp. 10.000.000'],
  questions: [
    {
      quest: 'Salah satu faktor yang menyebabkan Pulau Jawa lebih padat penduduknya ?', 
      option: ['Pulau Jawa memiliki tanah yang sangat subur', 'Pulau Jawa lebih lebih padat penduduknya dibanding pulau lainnya', 'Sudah menjadi kebijakan pemerintah', 'Pulau Jawa lebih kaya akan sumberdaya alam dibandingkan pulau lainnya'],
      answer: 1,
      score: 'Rp. 100.000'
    },
    {
      quest: 'Rumah adat daerah Sumatera Barat dikenal dengan sebutan nama ?', 
      option: ['Lamin', 'Banjar', 'Honai', 'Gadang'],
      answer: 4,
      score: 'Rp. 500.000'
    },
    {
      quest: 'Badak Bercula satu terdapat di Indonesia, di daerah ?', 
      option: ['Ujung Kulon', 'Kalimantan', 'Tengger', 'Bromo'],
      answer: 1,
      score: 'Rp. 1.000.000'
    },
    {
      quest: 'Berikut ini yang tidak termasuk dalam aktivitas aliran sungai adalah', 
      option: ['Pelapukan', 'Erosi', 'Pengendapan', 'Transportasi'],
      answer: 1,
      score: 'Rp. 5.000.000'
    },
    {
      quest: 'Siklus air berikut ini yang merupakan siklus pendek adalah', 
      option: ['Air laut menguap – Awan – Hujan dilaut', 'Air laut menguap – Hujan – Meresap ke tanah', 'Air laut menguap – Gletser – Kondensasi – Awan – Hujan di laut', 'Air laut menguap – Kondensasi – Awan – Hujan di laut'],
      answer: 4,
      score: 'Rp. 10.000.000'
    }
  ],
  index: 0,
  load: function(){
    if(this.index <= this.questions.length-1){
      quizBox.innerHTML = this.questions[this.index].quest
      op1.innerHTML = this.questions[this.index].option[0]
      op2.innerHTML = this.questions[this.index].option[1]
      op3.innerHTML = this.questions[this.index].option[2]
      op4.innerHTML = this.questions[this.index].option[3]
      rp1.innerHTML = this.scoreList[0]
      rp2.innerHTML = this.scoreList[1]
      rp3.innerHTML = this.scoreList[2]
      rp4.innerHTML = this.scoreList[3]
      rp5.innerHTML = this.scoreList[4]
    }else{
      quizBox.style.display = "none"
      op1.style.display = "none"
      op2.style.display = "none"
      op3.style.display = "none"
      op4.style.display = "none"
    }
  },
  uang: '0',
  jumlahPertanyaan: 0,
  next: function(){
    this.index++
    this.load()
    if(this.index <= 4){
      desc.innerHTML = `Uang kamu saat ini bernilai ${this.uang}, bila ingin masih bermain silahkan pilih jawaban kamu, jika tidak silahkan klik tombol <button class="btn btn-light btn-sm" onclick="selesai()">SELESAI SAJA</button>`
    }else if(this.index === 5){
      desc.style.display = "none"
      gameOver.innerHTML = `<h4>Selamat kamu telah menjadi pemenang pada quis ini. Kamu berhak mendapatkan uang senilai ${this.uang}</h4><h5>Mau main lagi ?</h5><button class="btn btn-primary btn-over" onclick="logout()">MAIN LAGI</button>`
    }
  },
  check: function(str){
    let splitId = str.id.split('')
    if(Number(splitId[splitId.length-1]) === this.questions[this.index].answer){
      str.className = "correct"
      this.uang = this.questions[this.index].score
      this.jumlahPertanyaan++
      desc.innerHTML = `<p>Jawaban kamu benar. Uang kamu sekarang ${this.uang}, apakah kamu ingin lanjut permainan ?</p><button class="btn btn-sm btn-warning btn-lanjut" onclick="next()">Lanjut</button><button class="btn btn-light btn-sm" onclick="selesai()">Selesai Saja</button>`
      for(let i = 0; i < noScore.children.length; i++){
        if(i <= this.index){
          noScore.children[i].style.color = "#ffc107"
        }
      }
      for(let i = 0; i < rpScore.children.length; i++){
        if(i <= this.index){
          rpScore.children[i].style.color = "#ffc107"
        }
      }
    }else{
      str.className = "wrong"
      if(this.index === 0){
        desc.innerHTML = `<p>Kamu baru mulai udah salah, jadi ga dapet apa-apa deh hehe, gimana kalau main lagi ?</p><button class="btn btn-sm btn-primary" onclick="logout()">MAIN LAGI</button>`
      }else if(this.index > 0){
        desc.innerHTML = `<p class="ket">Jawaban kamu salah dan kamu belum beruntung. Tapi kamu berhak membawa pulang uang senilai</p><p class="ket">${this.uang}. Mau main lagi ?</p><button class="btn btn-sm btn-primary btn-main-lagi" onclick="logout()">MAIN LAGI</button>`
      }
    }
  },
  notClickAble: function(){
    for(let i = 0; i < ul.children.length; i++){
      ul.children[i].style.pointerEvents = "none"
    }
  },
  clickAble: function(){
    for(let i = 0; i < ul.children.length; i++){
      ul.children[i].style.pointerEvents = "auto"
      ul.children[i].className = ''
    }
  },
  selesai: function(){
    quizBox.style.display = "none"
    op1.style.display = "none"
    op2.style.display = "none"
    op3.style.display = "none"
    op4.style.display = "none"
    desc.style.display = "none"
    gameOver.innerHTML = `<h4>Selamat kamu mendapatkan uang senilai ${this.uang} dengan menjawab ${this.jumlahPertanyaan} pertanyaan tantangan</h4><h5>Ayo jangan menyerah! gimana kalau kamu main lagi ?</h5><button class="btn btn-primary btn-over" onclick="logout()">MAIN LAGI</button>`
  }
}

function jawaban(str){
  app.check(str)
  app.notClickAble()
}

function next(){
  app.next()
  app.clickAble()
}

function selesai(){
  app.selesai()
}

window.onload = app.load()