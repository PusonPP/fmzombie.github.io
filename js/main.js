var button1 = document.getElementById('button1');
var hidden = document.getElementById('hidden');
button1.addEventListener('mouseenter',function(){
    hidden.style.display = 'block'
    button1.style.display = 'none'
})
button1.addEventListener('mouseleave',function(){
    hidden.style.display = 'none'
    button1.style.display = 'block'
})
hidden.addEventListener('mouseleave',function(){
    hidden.style.display = 'none'
    button1.style.display = 'block'
})
hidden.addEventListener('mouseenter',function(){
    hidden.style.display = 'block'
    button1.style.display = 'none'
})


var g1 = document.getElementById('g1')
var g1c = document.getElementById('g1c')
var g1h = document.getElementById('g1h')
g1.addEventListener('mouseover', function(){
    g1c.style.display = 'none'
    g1h.style.display = 'block'
})
g1.addEventListener('mouseleave', function(){
    g1c.style.display = 'block'
    g1h.style.display = 'none'
})
var g2 = document.getElementById('g2')
var g2c = document.getElementById('g2c')
var g2h = document.getElementById('g2h')
g2.addEventListener('mouseover', function(){
    g2c.style.display = 'none'
    g2h.style.display = 'block'
})
g2.addEventListener('mouseleave', function(){
    g2c.style.display = 'block'
    g2h.style.display = 'none'
})
var g3 = document.getElementById('g3')
var g3c = document.getElementById('g3c')
var g3h = document.getElementById('g3h')
g3.addEventListener('mouseover', function(){
    g3c.style.display = 'none'
    g3h.style.display = 'block'
})
g3.addEventListener('mouseleave', function(){
    g3c.style.display = 'block'
    g3h.style.display = 'none'
})

function opennav(){
    document.getElementById('right').style.width = '40%';
}

function closenav(){
    document.getElementById('right').style.width = '0%';
}