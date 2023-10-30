import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { Header } from '../../components/Header'

const ViceRepresentativePage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:1000px)')
  return (
    <>
      <Box margin={5}>
        <Header />
        <Typography align="center" variant="h4" fontWeight="bold">
          ー 副代表紹介 ー
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <img src="/images/kato.jpg" alt="" style={{ width: '100%', height: '800px', objectFit: 'cover' }} />
        </Box>
        <Box>
          {matches ? (
            <Box display="flex" gap={3}>
              <img
                src="/images/kato2.jpg"
                alt=""
                style={{ width: '50%', height: '600px', objectFit: 'cover', flexShrink: 0 }}
              />
              <Box width="50%" flexShrink={0}>
                <Typography
                  variant="h5"
                  marginBottom={2}
                  style={{ textDecorationLine: 'underline', textUnderlineOffset: '10px' }}
                >
                  お茶の秘めた可能性を引き出したい
                </Typography>
                <Typography variant="h6" lineHeight={2}>
                  こんにちは、ヴァー茶るカフェ副代表のかとぅーん（加藤 豊大）です！
                  <br />
                  僕の地元である鹿児島県南九州市の頴娃（えい）町では頴娃茶というお茶の産地です。
                  <br />
                  しかし、高齢化による後継者不足や、お茶の需要の減少により、頴娃茶の生産者は年々減少しています。
                  <br />
                  ですが、お茶には一人の時にリラックスできたり、また仲間と場を盛り上げる力を持っています。
                  <br />
                  僕はこのヴァー茶るカフェを通して、お茶の魅力を伝えたいと思っています！
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box flexDirection="column">
              <img src="/images/kato2.jpg" alt="" style={{ width: '100%', flexShrink: 0 }} />
              <Box width="100%" flexShrink={0}>
                <Typography
                  variant="h5"
                  marginTop={10}
                  marginBottom={2}
                  style={{ textDecorationLine: 'underline', textUnderlineOffset: '10px' }}
                >
                  お茶の秘めた可能性を引き出したい
                </Typography>
                <Typography lineHeight={2} variant="h6">
                  こんにちは、ヴァー茶るカフェ副代表のかとぅーん（加藤 豊大）です！
                  <br />
                  僕の地元である鹿児島県南九州市の頴娃（えい）町では頴娃茶というお茶の産地です。
                  <br />
                  しかし、高齢化による後継者不足や、お茶の需要の減少により、頴娃茶の生産者は年々減少しています。
                  <br />
                  ですが、お茶には一人の時にリラックスできたり、また仲間と場を盛り上げる力を持っています。
                  <br />
                  僕はこのヴァー茶るカフェを通して、お茶の魅力を伝えたいと思っています！
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box marginTop={10} padding={10} bgcolor={'#f0e4bc'}>
          <Typography
            variant="body1"
            style={{ textDecorationLine: 'underline', textUnderlineOffset: '10px', marginBottom: 20 }}
          >
            経歴
          </Typography>
          <Box display="flex" gap={5}>
            <Typography lineHeight="20px">
              九州大学 農学部生物生産システム工学分野 4年
              <br />
              <br />
              九州大学 お茶サークル 部長
              <br />
              <br />
              C&C (チャレンジアンドクリエイション) 2022 優秀賞
              <br />
              <br />
              九州大学 アイデア・バトル 2023 (1st), 2021 (1st, 2nd) 採択者
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ViceRepresentativePage
