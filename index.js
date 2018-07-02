const app = "I don't do much."

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px','')
  var left = parseInt(leftNumbers)
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
  
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px','')
  var right = parseInt(rightNumbers)
  
  if (right < 360) {
    dodger.style.left = `${right + 1}px`
  }
}

var body = document.body
body.addEventListener('keydown',function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
  
  if (e.which === 37) {
    moveDodgerLeft();
  }
})