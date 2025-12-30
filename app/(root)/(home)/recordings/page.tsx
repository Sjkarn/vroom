import CallList from '@/components/CallList';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white mb-5">
      <h1 className="text-3xl font-bold">Recordings</h1>

      <CallList type="recordings" />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          fontFamily: 'Footlight MT',
          fontSize: '1rem',
          background: '#252A41',
          textAlign: 'center',
          padding: 5,
        }}
      >
        <h1>
          Made with ❤️ Idea and Concept - Deepesh, Programmed and Design by
          Saurabh Karn and Aditya Prajapati
        </h1>
      </div>
    </section>
  );
};

export default PreviousPage;
