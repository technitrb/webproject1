
const toggle=document.querySelector('.nav-toggle');
const menu=document.querySelector('#nav-menu');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const search=document.querySelector('#program-search');
if(search){search.addEventListener('input',()=>{const term=search.value.trim().toLowerCase();document.querySelectorAll('.program-card[data-topic]').forEach(card=>{card.hidden=term&&!card.dataset.topic.includes(term)&&!card.textContent.toLowerCase().includes(term);});});}
document.querySelectorAll('.lead-form').forEach(form=>{form.addEventListener('submit',event=>{event.preventDefault();const note=form.querySelector('.form-note');if(note)note.textContent='Danke! In einer echten Website würde jetzt die Beratungsanfrage gesendet.';});});
