let yesCount = 1;

        // function openLetter() {
        //     const letter = document.querySelector('.letter');
        //     letter.classList.add('letter-visible');
        //     document.querySelector('.message').style.opacity = '0';
        //     document.querySelector('.stamp').style.display = 'none';
        // }

        function openLetter() {
            const letter = document.querySelector('.letter');
            letter.classList.add('letter-visible');
            document.querySelector('.stamp').style.display = 'none';
        }
        
        function handleYes() {
            document.querySelector('.envelope-container').style.display = 'none';
            document.querySelector('.celebration').style.display = 'block';
        }

        function handleNo() {
            yesCount++;
            const optionsDiv = document.querySelector('.options');
            
            const newYes = document.createElement('button');
            newYes.textContent = "YES💞";
            newYes.style.backgroundColor = '#ff69b4';
            newYes.style.color = 'white';
            newYes.style.position = 'absolute';
           newYes.style.left = `${Math.random() * 50 + 10}%`;
            newYes.style.top = `${Math.random() * 50 + 10}%`;
            newYes.style.transform = `scale(${1 + yesCount*0.1}) rotate(${Math.random()*10 - 5}deg)`;
            newYes.onclick = handleYes;
            
            optionsDiv.appendChild(newYes);
        }