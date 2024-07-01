export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post: any) => ({
    slug: post.id.toString(),
  }));
}
export default function Post() {
  return (
    <article>
      <section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section><section>
        <h1>Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          reiciendis nesciunt inventore, a veniam corrupti, perspiciatis aperiam
          at sint eos libero modi odio ipsum mollitia? Placeat obcaecati labore
          aliquid explicabo, iste quos est, reiciendis eligendi, nemo eos
          nostrum minus? Et nemo consectetur maiores incidunt nostrum ea harum
          quas quibusdam! Reiciendis!
        </p>
      </section>
      <section>
        <h2>What</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          itaque, mollitia quam cumque labore iste aut, natus fugiat dicta magni
          vitae omnis repellat. Vel ullam rerum impedit soluta ratione, odio
          quidem quibusdam voluptates accusantium maxime tempora mollitia
          eveniet aut, eos consequatur perspiciatis quas dicta placeat fuga, in
          quo ad officiis.
        </p>
      </section>
    </article>
  );
}
