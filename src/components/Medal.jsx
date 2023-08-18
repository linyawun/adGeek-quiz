import { useSelector } from 'react-redux';
function Medal() {
  const { score } = useSelector((state) => state.user);
  const { filteredQuestions } = useSelector((state) => state.question);
  return (
    <div className='flex justify-center items-center relative'>
      <div className='absolute bottom-1/3'>
        <span className='text-5xl'>{score * 10}</span>
        {/* <span className='text-2xl'> / {filteredQuestions.length}</span> */}
      </div>
      <svg
        id='medal'
        data-name='medal'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473 473'
      >
        <circle
          cx='235.971'
          cy='273.007'
          r='121.689'
          fill='#d19000'
          stroke='#a57005'
          strokeMiterlimit='10'
          strokeWidth='18'
        />
        <rect
          className='light'
          x='110.246'
          y='70.854'
          width='22'
          height='294.983'
          transform='translate(111.416 -44.37) rotate(30)'
          fill='#fafafa'
          opacity='0.10'
        />
        <path
          d='M250.5,13C119.885,13,14,118.885,14,249.5S119.885,486,250.5,486,487,380.115,487,249.5,381.115,13,250.5,13Zm0,424.324A150.789,150.789,0,1,1,401.289,286.536,150.789,150.789,0,0,1,250.5,437.324Z'
          transform='translate(-14 -13)'
          fill='#1c0059'
          opacity={0.7}
        />
        <rect
          x='196.819'
          y='116.398'
          width='78.304'
          height='12.698'
          fill='#a57005'
        />
        <path
          d='M305,112.468H196a8.465,8.465,0,1,0,0,16.931H305a8.465,8.465,0,1,0,0-16.931Zm-10.92,13.756H207.982c-3.693,0-6.687-2.369-6.687-5.291s2.994-5.291,6.687-5.291h86.094c3.693,0,6.687,2.369,6.687,5.291S297.769,126.224,294.076,126.224Z'
          transform='translate(-14 -13)'
          fill='#d19000'
        />
        <path
          d='M326.235,25.388,297.322,125.557a8.062,8.062,0,0,1-3.246.667H207.551a8.062,8.062,0,0,1-3.246-.667L175.338,25.2C81.571,56.61,14,145.161,14,249.5,14,380.115,119.885,486,250.5,486S487,380.115,487,249.5C487,145.372,419.705,56.964,326.235,25.388Z'
          transform='translate(-14 -13)'
          fill='none'
        />
        <path
          d='M241.773,26.425l.009.034,9.031,31.286,12.809-44.377C259.278,13.13,254.9,13,250.5,13q-6.294,0-12.507.329l3.78,13.1Z'
          transform='translate(-14 -13)'
          fill='none'
        />
        <polygon
          points='224.174 88.535 236.813 44.745 227.783 13.459 236.426 44.626 224.174 88.535'
          fill='#2c2c33'
        />
        <path
          d='M228.324,126.224h2.723l.039-.136C230.4,126.174,228.6,126.224,228.324,126.224Z'
          transform='translate(-14 -13)'
          fill='#2c2c33'
        />
        <path
          d='M207.551,126.224h5.508l28.714-99.8-3.78-13.1A235.648,235.648,0,0,0,175.338,25.2L204.3,125.557A8.062,8.062,0,0,0,207.551,126.224Z'
          transform='translate(-14 -13)'
          fill='#2c2c33'
        />
        <path
          d='M238.174,101.535l-6.838,24.505a1.217,1.217,0,0,1-.249.047l-.039.136h63.028a8.062,8.062,0,0,0,3.246-.667L326.235,25.388a235.629,235.629,0,0,0-62.612-12.02L250.813,57.745Z'
          transform='translate(-14 -13)'
          fill='#2c2c33'
        />
        <path
          d='M231.336,126.04l6.838-24.505,12.252-43.909-8.644-31.167-.009-.034h0l-28.714,99.8h15.266c.278,0,2.077-.049,2.763-.136A1.217,1.217,0,0,0,231.336,126.04Z'
          transform='translate(-14 -13)'
          fill='#1e1e23'
        />
        <path
          d='M250.5,135.747A150.789,150.789,0,1,0,401.289,286.536,150.789,150.789,0,0,0,250.5,135.747ZM250.141,415.7A129.859,129.859,0,1,1,380,285.837,129.859,129.859,0,0,1,250.141,415.7Z'
          transform='translate(-14 -13)'
          fill='#d19000'
        />
      </svg>
    </div>
  );
}

export default Medal;