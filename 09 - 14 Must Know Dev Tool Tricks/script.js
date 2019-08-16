const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function peachPuffIt() {
      const p = document.querySelector('p');
      p.style.color = 'peachpuff';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')

    // Interpolated
    console.log('Hello, I\'m a %s', '💩')
    console.log(`Hello I\'m ${dogs[0].name}`)

    // Styled
    console.log('%c Peachpuff 4L!', 'background-color: peachpuff')

    // warning!
    console.warn('OH NOOOO !!!')

    // Error :|
    console.error('Damn it!') // also gives you the stack trace

    // Info - not showing info icon
    console.info('Crocodiles eat 3-4 people per year.')

    // Testing - only fires if something is wrong!
    console.assert('7' === 7, 'Something doesn\'t feel right...')

    // Clearing
    console.clear()

    // Viewing DOM Elements - checking available methods and properties
    const p = document.querySelector('p')
    console.dir(p)

    // Grouping together - pretty cool !!!!
    dogs.forEach(dog => {
        console.groupCollapsed(`Info about ${dog.name}`)
        console.log(`${dog.age} human years old`)
        console.log(`${dog.age * 7} dog years old`)
        console.groupEnd(`Info about ${dog.name}`)
    })

    // Counting - counts words, numbers, object...
    console.count('eHealthON')
    console.count('eHealthON')
    console.count('eHealthON')
    console.count('Ontario Health')

    // Timing - how long something takes
    console.time('fetching data')
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.table(data);
        })