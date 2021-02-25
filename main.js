console.log('Bienvenue sur la page l\'ami.')

// liste de region complete
var listRegion = ['Midi-Pyrénées', 'Aquitaine', 'Languedoc-Roussillon', 'PACA', 'Rhône-Alpes', 'Poitou-Charentes', 'Limousin', 'Auvergne', 'Bretagne', 'Pays-de-la-Loire', 'Basse-Normandie', 'Centre', 'Bourgogne', 'Franche-Compté', 'Alsace', 'Lorraine', 'Champagne-Ardenne', 'Ile-de-France', 'Picardie', 'Haute-Normandie', 'Nord-Pas-de-Calais', 'Corse', 'Rhône-Alpes']
var nmbsoignant = 0;

function display(elm) {
    nmbsoignant = 0
    var label = elm.getAttribute('label')
    console.log(label);
    chercheRegion(label)
    document.querySelector('div.liste p').innerHTML = nmbsoignant + ' soignant en région ' + label
}

function chercheRegion(nomRegion) {
    cleanli()
    var b = soignant.length
    for (let i = 0; i < b; i++) {
        console.log('i : ' + i)
        var arepresent = soignant[i].region.includes(nomRegion)
        if (arepresent == true) {
            console.log('present')
            addli(i)
            nmbsoignant++
        }
        else {
            console.log('pas present')
        }

    }
    console.log('nombre de soignant = ' + nmbsoignant)
}

// liste de region complete
var listsoigneurRegion = ['Midi-Pyrénées', 'Aquitaine', 'Languedoc-Roussillon', 'PACA', 'Rhône-Alpes', 'Poitou-Charentes', 'Limousin', 'Auvergne', 'Bretagne', 'Pays-de-la-Loire', 'Basse-Normandie', 'Centre', 'Bourgogne', 'Franche-Compté', 'Alsace', 'Lorraine', 'Champagne-Ardenne', 'Ile-de-France', 'Picardie', 'Haute-Normandie', 'Nord-Pas-de-Calais', 'Corse', 'Rhône-Alpes']

//Liste des soignants
soignant = [
    {
        nom: 'Fiona Mos',

        region: ['PACA', 'Ile-de-France', 'Nord-Pas-de-Calais'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Marion Buffa',
        region: ['PACA'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Marie Barthe',
        region: ['Aquitaine'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Muriel Tudziarz',
        region: ['Aquitaine'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Annabelle Rouger',
        region: ['Aquitaine', 'Ile-de-France'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Charlotte Augiat',
        region: ['Ile-de-France'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Fiona Mos',

        region: ['PACA', 'Ile-de-France', 'Nord-Pas-de-Calais'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Fiona Mos',

        region: ['PACA', 'Ile-de-France', 'Nord-Pas-de-Calais'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },
    {
        nom: 'Fiona Mos',

        region: ['PACA', 'Ile-de-France', 'Nord-Pas-de-Calais'],
        telephone: '0660606060',
        mail: 'fionamos2@gmail.com'
    },

]

// trouver un soignant par region 
var filtertest = soignant.filter(filter => filter.length = 2)   
console.log('filtertest : ' + filtertest)
var test = soignant.filter(filou => filou.region.alpha === 'PACA')



function addli(elm) {
    document.querySelector('ul').innerHTML += '<li class="box-soignant"><svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 350 625C 350 625 350 625 350 625C 350 625 453 870 453 870C 457 815 454 764 475 700C 465 700 450 690 450 675C 450 664 451 655 454 648C 468 649 480 649 501 649C 520 649 533 649 546 648C 549 655 550 664 550 675C 550 689 542 700 525 700C 546 764 543 815 547 870C 547 870 654 625 654 625C 757 625 792 647 831 725C 738 830 625 900 500 900C 375 900 232 817 173 730C 212 652 247 625 350 625M 501 129C 501 129 501 129 501 129C 624 129 724 229 724 352C 724 475 624 575 501 575C 378 575 278 475 278 352C 278 229 378 129 501 129"/></svg></i><h2>' + soignant[elm].nom + '</h2> <p> Telephone : <span>' + soignant[elm].telephone + '</span></p></li>'
}

function cleanli() {
    document.querySelector('ul').innerHTML = ''
}

