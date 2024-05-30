import React from 'react'

function ChatCharlie() {
  return (
    <div className="flex-1">

        <header className="bg-white p-4 text-gray-700">
          <h1 className="text-2xl font-semibold">Charlie</h1>
        </header>


        <div className="h-fit overflow-y-auto p-4 ">

          <div className="flex mb-4 cursor-pointer">
            
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-gray-700">
                <b>Richiesta del cliente:</b> 'Ho bisogno di un falegname per mettere a posto dei mobili.' <br />
                <b>Zona:</b> Alba Adriatica (TE) <br />
                <b>Cellulare del cliente:</b> 3402859210 <br />
                <b>Chiamare nella fascia oraria:</b> dal lunedi al venerdi, dalle 15 alle 16.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatCharlie