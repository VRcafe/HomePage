import { Box, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { Header } from '../../components/Header'
import '../../style.css'

const RepresentativePage: FC = () => {
  const matches: boolean = useMediaQuery('(min-width:1000px)')
  return (
    <>
      <Header />
      <Box>
        <Typography fontFamily="Shippori Mincho B1" align="center" variant="h4" fontWeight="bold">
          代表紹介
        </Typography>
        <ImageListItem
          sx={{
            textAlign: 'center',
            margin: 5,
          }}
        >
          <img src="images/mokkun_1.jpg" alt="" style={{ width: '100%' }} />
        </ImageListItem>
        <Box margin={5}>
          {matches ? (
            <Box display="flex" gap={3}>
              <img src="images/mokkun_2.jpg" alt="" style={{ width: '50%' }} />
              <Box width="50%" flexShrink={0}>
                <Typography
                  variant="h5"
                  marginBottom={2}
                  style={{ textDecorationLine: 'underline', textUnderlineOffset: '10px' }}
                >
                  現在の過度なストレス社会には癒しが必要
                </Typography>
                <Typography variant="h6" lineHeight={2}>
                  こんにちは、ヴァー茶るカフェ代表のもっくん（元谷 臣吾）です！
                  <br />
                  ヴァー茶るカフェでは、VRと日本茶を組み合わせるることで五感をフルに刺激し、新感覚のリラクゼーション体験を提供しています。
                  <br />
                  僕はこのヴァー茶るカフェを通して、現代のストレス社会に対するオアシスとなることを目指しています。
                  <br />
                  是非あなたもヴァー茶るカフェで、日常のストレスを解消してみませんか？
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box flexDirection="column">
              <ImageListItem>
                <img src="images/mokkun_2.jpg" alt="" style={{ width: '100%' }} />
              </ImageListItem>
              <Box width="100%" flexShrink={0}>
                <Typography
                  variant="h5"
                  marginTop={5}
                  marginBottom={2}
                  style={{ textDecorationLine: 'underline', textUnderlineOffset: '5px' }}
                >
                  現在の過度なストレス社会には癒しが必要
                </Typography>
                <Typography lineHeight={2} variant="h6">
                  こんにちは、ヴァー茶るカフェ代表のもっくん（元谷臣吾）です！
                  <br />
                  ヴァー茶るカフェでは、VRと日本茶を組み合わせるることで五感をフルに刺激し、新感覚のリラクゼーション体験を提供しています。
                  <br />
                  僕はこのヴァー茶るカフェを通して、現代のストレス社会に対するオアシスとなることを目指しています。
                  <br />
                  是非あなたもヴァー茶るカフェで、日常のストレスを解消してみませんか？
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box margin={5} padding={10} bgcolor={'#f0e4bc'}>
          <Typography
            variant="body1"
            style={{ textDecorationLine: 'underline', textUnderlineOffset: '10px', marginBottom: 20 }}
          >
            経歴
          </Typography>
          <Box display="flex" gap={5}>
            <Typography lineHeight="20px">
              九州大学 航空宇宙工学専攻 博士課程
              <br />
              <br />
              福岡県スタートアップビジコン 2023 優秀賞
              <br />
              <br />
              九創会 2022 (QREC) 採択者
              <br />
              <br />
              C&C 2021 (QREC) 採択者
              <br />
              <br />
              西日本音楽大会 アカペラブロッサム 第1位
            </Typography>
            <Typography lineHeight="20px" marginLeft="auto">
              アーチェリー 福岡大会 第2位, 九州大会 3位
              <br />
              <br />
              FDD (Focus Dancers Dream) 公認ピアニスト
              <br />
              <br />
              ICRR 東京大学 宇宙船研究所 スプリングプログラムスクール 修了
              <br />
              <br />
              放射線医学研究所 長期プログラム 修了
              <br />
              <br />
              国立天文シミュレーションプロジェクト CfCA 修了
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default RepresentativePage
