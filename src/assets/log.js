setTimeout(
  console.log.bind(
    console,
    '\n%cStop!',
    'color: red;font-size: 50px;font-weight: bold;text-shadow: -1px 1px 0 #0b0b0b, 1px 1px 0 #0b0b0b, 1px -1px 0 #0b0b0b, -1px -1px 0 #0b0b0b;font-family: Helvetica, Arial, sans-serif;'
  )
),
  setTimeout(
    console.log.bind(
      console,
      '\n%cThis is a browser feature intended for only developers. If someone told you to write something here to enable any feature or "hack" someone\'s account, it is a scam and will give them access to your personal account.',
      'font-size: 24px;font-family: Helvetica, Arial, sans-serif;'
    )
  ),
  setTimeout(
    console.log.bind(
      console,
      '\n%cSee https://en.wikipedia.org/wiki/Cross-site_scripting for more information.',
      'font-size: 24px;font-family: Helvetica, Arial, sans-serif;'
    )
  );
