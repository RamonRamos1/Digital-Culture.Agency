export default function Loading() {

  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-dc-black
        px-6
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >

        <div
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
          "
        >

          <span
            className="
              absolute
              h-20
              w-20
              animate-ping
              rounded-full
              bg-dc-blue/20
            "
          />


          <span
            className="
              relative
              h-10
              w-10
              rounded-full
              border-4
              border-dc-blue
              border-t-transparent
              animate-spin
            "
          />

        </div>



        <h2
          className="
            mt-8
            font-display
            text-2xl
            font-bold
          "
        >

          Diseñando soluciones...

        </h2>



        <p
          className="
            mt-3
            max-w-sm
            text-sm
            leading-relaxed
            text-dc-muted
          "
        >

          Analizamos problemas reales de negocio
          y construimos estrategias digitales
          adaptadas a cada empresa.

        </p>


      </div>


    </main>

  );

}