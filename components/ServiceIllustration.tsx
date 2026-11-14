/** Small, scalable editorial illustrations; surrounding copy provides the meaning. */
export default function ServiceIllustration({ kind }: { kind: "web" | "digital" | "automation" | "consultation" }) {
  return (
    <svg viewBox="0 0 480 320" fill="none" aria-hidden="true" className="w-full h-auto" strokeLinecap="round" strokeLinejoin="round">
      {kind === "web" && <>
        <circle cx="242" cy="163" r="140" fill="#DCEFE4" />
        <rect x="52" y="47" width="340" height="226" rx="14" fill="white" stroke="#234E40" strokeWidth="3" />
        <path d="M52 79H392" stroke="#234E40" strokeWidth="3" />
        <circle cx="69" cy="63" r="4" fill="#E6AF70" /><circle cx="83" cy="63" r="4" fill="#7EB49A" /><circle cx="97" cy="63" r="4" fill="#B2CFC0" />
        <rect x="77" y="100" width="134" height="141" rx="5" fill="#F4E4C9" />
        <path d="M77 206L119 153L148 182L176 137L211 182V241H77Z" fill="#7FA98A" />
        <circle cx="111" cy="126" r="13" fill="#E6AF70" />
        <path d="M235 120H356M235 136H324M235 165H352M235 180H337" stroke="#B2CFC0" strokeWidth="7" />
        <rect x="233" y="205" width="85" height="26" rx="13" fill="#31745A" />
        <rect x="349" y="154" width="78" height="139" rx="12" fill="#234E40" />
        <rect x="355" y="165" width="66" height="111" rx="5" fill="#F5F9F5" />
        <rect x="363" y="176" width="50" height="47" rx="3" fill="#B2CFC0" />
        <path d="M365 236H410M365 247H397" stroke="#7FA98A" strokeWidth="4" /><circle cx="388" cy="284" r="3" fill="white" />
        <path d="M34 259L23 241M38 235L35 217M440 100L452 88M434 79L436 63" stroke="#E6AF70" strokeWidth="4" />
      </>}
      {kind === "digital" && <>
        <ellipse cx="242" cy="282" rx="195" ry="13" fill="#D9E7EA" />
        <rect x="42" y="92" width="112" height="152" rx="6" transform="rotate(-9 42 92)" fill="#E6D7BD" />
        <rect x="62" y="73" width="112" height="152" rx="6" fill="white" stroke="#567680" strokeWidth="3" />
        <path d="M84 107H150M84 126H142M84 145H150M84 164H130M84 193H111" stroke="#B4C8CB" strokeWidth="5" />
        <path d="M190 153H237M225 141L237 153L225 165" stroke="#C18B48" strokeWidth="4" />
        <rect x="258" y="65" width="174" height="201" rx="13" fill="#234D5B" />
        <rect x="268" y="77" width="154" height="176" rx="5" fill="#F5FAFC" />
        <rect x="280" y="91" width="130" height="26" rx="4" fill="#D6E9EC" />
        {[134, 173, 212].map(y => <g key={y}><rect x="283" y={y} width="18" height="18" rx="4" fill="#7EA9A1" /><path d={`M287 ${y+9}l4 4 7-8`} stroke="white" strokeWidth="2" /><path d={`M314 ${y+5}h80m-80 10h58`} stroke="#B4C8CB" strokeWidth="4" /></g>)}
        <path d="M347 42C347 27 370 27 370 42C382 33 398 49 386 60H339C324 58 329 39 347 42Z" fill="#B4C8CB" />
      </>}
      {kind === "automation" && <>
        <circle cx="244" cy="156" r="132" fill="#30584D" />
        <path d="M99 163H177M303 163H383M235 84V53H333V101M235 242V273H140V225" stroke="#91B9A3" strokeWidth="3" strokeDasharray="6 8" />
        <rect x="165" y="99" width="150" height="133" rx="30" fill="#EFF5E9" />
        <rect x="185" y="125" width="110" height="57" rx="16" fill="#234E40" />
        <circle cx="214" cy="152" r="7" fill="#EBC58C" /><circle cx="266" cy="152" r="7" fill="#EBC58C" />
        <path d="M224 202H256M240 99V83" stroke="#91B9A3" strokeWidth="6" /><circle cx="240" cy="76" r="8" fill="#EBC58C" />
        <rect x="43" y="126" width="66" height="75" rx="9" fill="#91B9A3" /><path d="M58 146H94M58 160H94M58 174H80" stroke="#234E40" strokeWidth="4" />
        <circle cx="382" cy="164" r="39" fill="#EBC58C" /><path d="M366 164L378 176L399 151" stroke="#234E40" strokeWidth="5" />
        <path d="M326 89L333 101L345 94M128 233L140 225L148 238" stroke="#91B9A3" strokeWidth="3" />
        <path d="M104 66V88M93 77H115M381 233V251M372 242H390" stroke="#EBC58C" strokeWidth="3" />
      </>}
      {kind === "consultation" && <>
        <circle cx="242" cy="167" r="132" fill="#F2E2CB" />
        <path d="M82 275C82 220 104 199 139 199C174 199 197 223 197 275" fill="#7BA692" />
        <circle cx="140" cy="169" r="31" fill="#E2B58D" /><path d="M109 168C98 119 174 114 171 164L151 146L109 168Z" fill="#284E40" />
        <path d="M283 275C283 224 304 203 338 203C373 203 396 228 396 275" fill="#C38F54" />
        <circle cx="338" cy="172" r="30" fill="#E2B58D" /><path d="M309 169C300 119 373 119 370 171L349 144L309 169Z" fill="#284E40" />
        <path d="M150 236L201 256M327 237L281 256" stroke="#E2B58D" strokeWidth="17" />
        <path d="M164 265H322M185 266L175 302M301 266L312 302" stroke="#284E40" strokeWidth="6" />
        <path d="M212 251L200 216H256L269 251" fill="#FCFCF5" stroke="#7BA692" strokeWidth="3" />
        <path d="M144 43H255C267 43 273 51 273 61V96C273 107 267 113 255 113H203L183 132V113H144C133 113 127 107 127 96V61C127 51 133 43 144 43Z" fill="white" stroke="#C9B493" strokeWidth="2" />
        <path d="M152 66H245M152 85H220" stroke="#7BA692" strokeWidth="5" />
        <path d="M296 68H345C356 68 361 74 361 84V105C361 115 356 120 345 120H336V134L320 120H296C286 120 281 115 281 105V84C281 74 286 68 296 68Z" fill="#7BA692" />
        <path d="M305 94L316 103L337 84" stroke="white" strokeWidth="4" />
      </>}
    </svg>
  );
}
