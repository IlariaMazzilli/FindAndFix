import React from 'react'

function ChatAlice() {
  return (
    <div className="flex-1">

        <header className="bg-white p-4 text-gray-700">
          <h1 className="text-2xl font-semibold">Alice</h1>
        </header>


        <div className="h-fit overflow-y-auto p-4 ">

          <div className="flex mb-4 cursor-pointer">
            
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-gray-700">
                <b>Richiesta del cliente:</b> 'Ho bisogno di un pavimentista per mettere a posto il pavimento del salotto di casa. Si tratta di circa 90 mq.' <br />
                <b>Zona:</b> Domodossola (VB) <br />
                <b>Cellulare del cliente:</b> 3483457338 <br />
                <b>Chiamare nella fascia oraria:</b> dal lunedi al venerdi, dalle 14 alle 18.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatAlice