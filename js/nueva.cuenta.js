function openModal() {
    document.getElementById('successModal').style.display = 'block';
  }
  
  document.getElementById('continueButton').addEventListener('click', function() {
    // Add your code here to continue to the next step
    document.getElementById('successModal').style.display = 'none';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
  });