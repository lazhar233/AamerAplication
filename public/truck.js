const bdy = document.getElementById("bdy");

        function care() {
            var car = document.createElement('div');
            var btn = document.createElement('button');
            var hsx = document.createElement('h6');

            btn.innerHTML = 'Click';  
            hsx.innerHTML = 'If using margin, gap between';

            car.id = 'car'; 
            var gren = document.createElement('div'); 
            gren.id = 'gren'; 

            gren.appendChild(btn);
            gren.appendChild(hsx);

            car.appendChild(gren);
            
            bdy.appendChild(car);
        }

        care();
        care();
        care();
        care();
 