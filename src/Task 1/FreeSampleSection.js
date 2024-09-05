export const FreeSampleSection = () => {
    return (
      <section className="relative h-[540px] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/495a/76ab/fa6125a690a426b8fcb3bbfd55392e02?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqzHr~Pgauqzi12exE8ADmcz2K5-MaQoyxbGM0fJkRem5F5IGNYDWBpXv02kZfHd9-NDajIT8cRl7tMi4hqxEning3Hn3VFpOfr-0vc-jB1SY7RHKcKWgQhIcTA9BL5aTWJuCRg4Ko1JLJxP1kIkNhSkfWxdl9yervfFlSLIyZb6KUXYi1vrVXv-Jx9d2JH9YPfchTtKhFQXg6oJ4RoDgdagDs2xm1lrjulcbqSS1YfTUTbyqw1k0ZAW-apvd90qtkWGKiESmS9juj48Xdt0551KGaLGxNlLrs-OolmyL2YjjBm-e5uhTpwpajQOML79swV2Stjm739lig9DPQI0QA__')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.5',
          }}
        ></div>
          <div className="absolute inset-0" style={{ backgroundColor: '#2F1893', opacity: 0.5 }}></div>
        <div className="relative text-center text-white px-4">
          <p className="text-sm mb-2">Free Sample</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
  <span className="block">Powerful Generator and Free</span>
  <span className="block">Figma Sources</span>
</h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </section>
    );
  };
