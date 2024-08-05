function generateTable(event) {
    event.preventDefault();
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    
    if (input) {
      let table = '<table>';
      for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${input} x ${i} = ${input * i}</td></tr>`;
      }
      table += '</table>';
      output.innerHTML = table;
    } else {
      output.innerHTML = 'Please enter a number';
    }
  }
  