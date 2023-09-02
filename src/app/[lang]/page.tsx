import LocaleSwitcher from '@/components/LocaleSwitcher';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { IDictionary } from '@/types/Dictionary';

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: Props) {
  const { page }: IDictionary = await getDictionary(lang);

  return (
    <>
      <Box component='div' className='main-home'>
        <LocaleSwitcher />
        <h1>
          {page.home.title}{' '}
          <a href='https://nextjs.org/docs' target='_blank' className='code'>
            {page.home.titleSpan}
          </a>
        </h1>

        <Typography paragraph className='description'>
          {page.home.subtitle}
        </Typography>

        <Grid container spacing={1} sx={{ flexWrap: 'wrap', maxWidth: '800px', mt: 2 }}>
          {page.home.cards.map((card) => {
            return (
              <Grid container item sm={6} key={card.title}>
                <a href={card.link} target='_blank'>
                  <Card className='card-home'>
                    <Typography variant='h5' className='card-home-text'>
                      {card.title}&nbsp;&rarr;
                    </Typography>
                    <Typography paragraph>{card.subtitle}</Typography>
                  </Card>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
