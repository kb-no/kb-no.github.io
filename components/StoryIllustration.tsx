type Scene = "brief" | "design" | "launch" | "paper" | "fax" | "form" | "team";

export default function StoryIllustration({ scene }: { scene: Scene }) {
  return <svg viewBox="0 0 400 270" fill="none" aria-hidden="true" className="mx-auto w-full max-w-sm" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="200" cy="242" rx="154" ry="12" fill="#DCE8DE" />
    {scene === "brief" && <>
      <rect x="145" y="37" width="146" height="185" rx="10" fill="white" stroke="#416856" strokeWidth="3" />
      <rect x="181" y="29" width="75" height="22" rx="7" fill="#7EA790" />
      {[78,120,162].map(y => <g key={y}><rect x="165" y={y} width="19" height="19" rx="4" fill="#DEECE0" /><path d={`M169 ${y+9}l4 4 7-8`} stroke="#416856" strokeWidth="2" /><path d={`M197 ${y+5}h69m-69 11h47`} stroke="#B9CEBE" strokeWidth="4" /></g>)}
      <circle cx="90" cy="145" r="25" fill="#E4BA93" /><path d="M64 142C61 108 118 100 116 144L93 129Z" fill="#284E40" />
      <path d="M45 235V212C45 177 132 177 132 212V235" fill="#7EA790" /><path d="M116 202L158 179" stroke="#E4BA93" strokeWidth="13" />
      <path d="M309 70H354M331 48V93" stroke="#D5AA6D" strokeWidth="4" />
    </>}
    {scene === "design" && <>
      <rect x="55" y="43" width="278" height="181" rx="10" fill="white" stroke="#416856" strokeWidth="3" />
      <path d="M55 70H333" stroke="#416856" strokeWidth="3" /><circle cx="72" cy="57" r="4" fill="#D5AA6D" /><path d="M88 57H120" stroke="#B9CEBE" strokeWidth="4" />
      <rect x="77" y="89" width="94" height="109" rx="4" fill="#F2E1C8" /><path d="M77 180L107 134L133 164L153 145L171 166V198H77Z" fill="#7EA790" />
      <path d="M192 100H303M192 116H274M192 145H303M192 161H290" stroke="#B9CEBE" strokeWidth="6" /><rect x="191" y="181" width="68" height="18" rx="9" fill="#416856" />
      <path d="M301 209L337 133L351 140L315 216L297 229Z" fill="#D5AA6D" stroke="#8B6C42" strokeWidth="2" />
    </>}
    {scene === "launch" && <>
      <path d="M173 164L137 185L145 143L172 124M228 164L264 185L256 143L229 124" fill="#7EA790" stroke="#416856" strokeWidth="3" />
      <path d="M172 172V104C172 68 200 37 200 37C200 37 228 68 228 104V172Z" fill="white" stroke="#416856" strokeWidth="3" /><circle cx="200" cy="107" r="17" fill="#DCE8DE" stroke="#416856" strokeWidth="3" />
      <path d="M184 185L200 224L216 185" fill="#E6B871" /><path d="M200 190V211" stroke="white" strokeWidth="4" />
      <path d="M82 102L92 112L112 88M282 73L292 83L312 59M288 207L298 217L318 193" stroke="#7EA790" strokeWidth="5" /><path d="M105 175V193M96 184H114M299 130V148M290 139H308" stroke="#D5AA6D" strokeWidth="3" />
    </>}
    {scene === "paper" && <>
      {[0,1,2].map(i => <g key={i} transform={`translate(${i*10},${-i*12})`}><rect x="59" y="99" width="112" height="134" rx="5" fill={i === 2 ? "white" : "#E7DAC4"} stroke="#9C8B70" strokeWidth="2" /><path d="M78 125H150M78 146H144M78 167H150M78 188H130" stroke="#C4B69F" strokeWidth="4" /></g>)}
      <rect x="224" y="66" width="126" height="157" rx="9" fill="#416856" /><rect x="234" y="77" width="106" height="126" rx="4" fill="white" />
      <path d="M248 101H325M248 120H325M248 139H325M248 158H325M272 95V177M299 95V177" stroke="#B9CEBE" strokeWidth="2" /><path d="M180 150H208M198 140L208 150L198 160" stroke="#C59155" strokeWidth="3" />
    </>}
    {scene === "fax" && <>
      <path d="M115 111V46H258V112" fill="white" stroke="#7B8C84" strokeWidth="3" /><path d="M136 66H237M136 83H216" stroke="#BDCDC2" strokeWidth="4" />
      <rect x="71" y="105" width="240" height="104" rx="17" fill="#D8E5DB" stroke="#416856" strokeWidth="3" /><rect x="83" y="98" width="44" height="105" rx="16" fill="#416856" />
      <rect x="165" y="123" width="75" height="24" rx="3" fill="#7EA790" />
      {[164,187,210,233].map(x => <g key={x}><path d={`M${x} 163h8m-8 15h8`} stroke="#416856" strokeWidth="5" /></g>)}
      <path d="M142 202H268V240H142Z" fill="white" stroke="#7B8C84" strokeWidth="2" /><path d="M161 216H249M161 229H226" stroke="#BDCDC2" strokeWidth="3" />
      <circle cx="321" cy="63" r="26" fill="#F0DEC1" /><path d="M321 49V65L333 71" stroke="#9D7848" strokeWidth="3" />
    </>}
    {scene === "form" && <>
      <rect x="63" y="46" width="101" height="183" rx="14" fill="#416856" /><rect x="71" y="60" width="85" height="151" rx="5" fill="white" />
      <rect x="82" y="75" width="63" height="19" rx="3" fill="#DCE8DE" />
      {[112,144].map(y => <g key={y}><path d={`M83 ${y}h34`} stroke="#7EA790" strokeWidth="3" /><rect x="82" y={y+8} width="63" height="16" rx="3" stroke="#B9CEBE" strokeWidth="2" /></g>)}
      <rect x="82" y="184" width="63" height="15" rx="7" fill="#7EA790" /><path d="M181 136H219M208 125L219 136L208 147" stroke="#C59155" strokeWidth="3" />
      <rect x="237" y="72" width="110" height="129" rx="8" fill="white" stroke="#416856" strokeWidth="3" /><path d="M253 94H330M253 111H318" stroke="#B9CEBE" strokeWidth="4" /><circle cx="292" cy="155" r="24" fill="#DCE8DE" /><path d="M280 154L289 163L305 146" stroke="#416856" strokeWidth="4" />
    </>}
    {scene === "team" && <>
      <rect x="138" y="35" width="124" height="104" rx="10" fill="white" stroke="#416856" strokeWidth="3" /><path d="M157 61H244M157 81H220" stroke="#B9CEBE" strokeWidth="5" /><path d="M160 118L181 104L205 113L240 93" stroke="#C59155" strokeWidth="4" />
      {[91,200,309].map((x,i) => <g key={x}><path d={`M${x} 153v-10m0 0h${i===0?45:i===2?-45:0}`} stroke="#7EA790" strokeWidth="3" strokeDasharray="4 6" /><circle cx={x} cy="183" r="23" fill="#E4BA93" /><path d={`M${x-24} 180c-3-38 52-38 48 0l-24-16Z`} fill="#284E40" /><path d={`M${x-39} 240v-14c0-32 78-32 78 0v14`} fill={i===1?"#C59155":"#7EA790"} /></g>)}
    </>}
  </svg>;
}
