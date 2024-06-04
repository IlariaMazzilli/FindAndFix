import React from 'react'

function ChatMartin() {
  return (
    <div className="flex-1">

        <header className="bg-white p-4 text-gray-700">
          <h1 className="text-2xl font-semibold">Martin</h1>
        </header>


        <div className="h-fit overflow-y-auto p-4 ">

          <div className="flex mb-4 cursor-pointer">
            
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-gray-700">
                <b>Richiesta del cliente:</b> 'Ho bisogno di un idraulico per aggiustare le tubature di casa.' <br />
                <b>Zona:</b> Napoli (NA) <br />
                <b>Cellulare del cliente:</b> 3402244434 <br />
                <b>Chiamare nella fascia oraria:</b> dal lunedi al venerdi, dalle 14:30 alle 17.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatMartin