time02 = performance.now();

message_box.innerHTML = `\n<br>Consumed <span style="color: ${text_color}">${(time02 - time01).toFixed(3)}ms</span> to execute this <span style="color: ${text_color}">${type}</span> program.`;

document.body.style.backgroundColor = 'Black';
document.body.style.color = 'Gold';
document.body.append(message_box);
