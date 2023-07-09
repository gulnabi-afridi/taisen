import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import bgImage from "../../public/assets/pictures/WhitePaper2/whitePaper2bg.png";
import Image from "next/image";
import ResponsiveHeading from "../Common/ResponsiveHeading";
import ResponsiveParagraph from "../Common/ResponsiveParagraph";
import Link from "next/link";

function SecSection() {
  // state
  const [toggleData, setToggleData] = useState("aims");
  // function
  const UpdateToggleData = (value) => {
    setToggleData(value);
  };
  console.log(toggleData);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#596b75",
      }}
      id={'explore'}
    >
      <Container maxWidth="big">
        {/* ===========bg image========= */}
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            left: "0px",
          }}
        >
          <Image
            src={bgImage}
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            alt="whitePaper2bg"
          ></Image>
          {/* left postion */}
          <Box
            sx={{
              width: {xs: "100%", md: "50%"},
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "start",
              alignItems: "start",
              mr: {xs: "0", md: 4},
            }}
          >
            <ResponsiveParagraph sx={{fontSize: "35px"}}>
              Read in Order
            </ResponsiveParagraph>
            {/* =====grid====== */}
            <Box
              sx={{
                width: "100%",
                display: "grid",
                columnGap: {xs: "12px", md: "20px"},
                rowGap: "15px",
                gridTemplateColumns: "auto auto auto auto auto auto",
                gridTemplateRows: {
                  xs: "65px 65px 65px 65px 65px 65px",
                  md: "50px 50px 50px 50px 50px 50px",
                },
                zIndex: 100,
              }}
            >
              {/* Aims*/}
              <Link href="#aims">
                <Box
                  onClick={() => {
                    UpdateToggleData("aims");
                  }}
                  sx={{
                    gridColumn: {xs: "1/4", md: "1/2"},
                    gridRow: {xs: "1", md: "1"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},
                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},
                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>1</span>Aims

                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* Founder Team  */}
              <Link href={'#founderTeam'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("founderTeam");
                  }}
                  sx={{
                    gridColumn: {xs: "4/7", md: "2/5"},
                    gridRow: {xs: "1", md: "1"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>2</span>Founder Team
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* Metaverse */}
              <Link href={'#metaverse'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("metaverse");
                  }}
                  sx={{
                    gridColumn: {xs: "1/4", md: "5/7"},
                    gridRow: {xs: "2", md: "1"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>3</span>MetaVerse
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* Taisen Token */}
              <Link href={'#taisenToken'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("taisenToken");
                  }}
                  sx={{
                    gridColumn: {xs: "4/7", md: "1/4"},
                    gridRow: "2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>4</span>Taisen Token
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* Constant Upgrade */}
              <Link href={'#constantUpgrade'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("constantUpgrade");
                  }}
                  sx={{
                    gridColumn: {xs: "1/4", md: "4/7"},
                    gridRow: {xs: "3", md: "2"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>5</span>Constant Upgrade
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* community value */}
              <Link href={'#communityValues'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("communityValues");
                  }}
                  sx={{
                    gridColumn: {xs: "4/7", md: "1/6"},
                    gridRow: "3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>6</span>Community Values
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* The lore */}
              <Link href={'#theLore'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("theLore");
                  }}
                  sx={{
                    gridColumn: {xs: "1/4", md: "6/7"},

                    gridRow: {xs: "4", md: "3"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>7</span>The Lore
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* art and rarity */}
              <Link href={'#artAndRarity'}>
                <Box
                  onClick={() => {
                    UpdateToggleData("artAndRarity");
                  }}
                  sx={{
                    gridColumn: {xs: "4/7", md: "1/4"},

                    gridRow: "4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#839098",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <ResponsiveParagraph
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      color: "#3f4248",
                      mt: 0,
                      fontSize: {xs: "20px", md: "26px"},

                      "& span": {
                        color: "#711b1c",
                        fontSize: {xs: "30px", md: "36px"},

                        mr: 1,
                      },
                    }}
                  >
                    {" "}
                    <span>8</span>Art and Rarity
                  </ResponsiveParagraph>
                </Box>
              </Link>
              {/* following results */}
              {/*<Link href={'#followingResults'}>*/}
              {/*  <Box*/}
              {/*    onClick={() => {*/}
              {/*      UpdateToggleData("followingResult");*/}
              {/*    }}*/}
              {/*    sx={{*/}
              {/*      gridColumn: {xs: "1/-1", md: "4/7"},*/}

              {/*      gridRow: {xs: "5", md: "4"},*/}
              {/*      display: "flex",*/}
              {/*      justifyContent: "center",*/}
              {/*      alignItems: "center",*/}
              {/*      background: "#839098",*/}
              {/*      borderRadius: "5px",*/}
              {/*      cursor: "pointer",*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <ResponsiveParagraph*/}
              {/*      sx={{*/}
              {/*        width: "100%",*/}
              {/*        textAlign: "center",*/}
              {/*        color: "#3f4248",*/}
              {/*        mt: 0,*/}
              {/*        fontSize: {xs: "20px", md: "26px"},*/}

              {/*        "& span": {*/}
              {/*          color: "#711b1c",*/}
              {/*          fontSize: {xs: "30px", md: "36px"},*/}

              {/*          mr: 1,*/}
              {/*        },*/}
              {/*      }}*/}
              {/*    >*/}
              {/*      {" "}*/}
              {/*      <span>9</span>Following Results*/}
              {/*    </ResponsiveParagraph>*/}
              {/*  </Box>*/}
              {/*</Link>*/}
            </Box>
          </Box>

          {/* right portion */}
          {Object.keys(data).map((value) => {
            console.log(value);
            if (value === toggleData) {
              return (
                <Box
                  key={data[value].id}
                  id={data[value].id}
                  sx={{
                    zIndex: 100,
                    // background: "rgba(191,199,202,255)",
                    background: "rgba(221,228,220,0.8)",
                    borderRadius: "6px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(1px)",
                    width: {xs: "100%", md: "50%"},
                    display: "flex",
                    flexDirection: "column",
                    gap: {xs: 3, ms: 6},
                    justifyContent: "start",
                    alignItems: "start",
                    p: {xs: 3, md: 6},
                    minHeight: "600px",
                  }}
                >
                  <ResponsiveHeading sx={{color: "#141824"}}>
                    {data[value].title}
                  </ResponsiveHeading>
                  <ResponsiveParagraph
                    sx={{lineHeight: "2rem", color: "black"}}
                  >
                    {data[value].description}
                  </ResponsiveParagraph>
                </Box>
              );
            }
          })}
        </Box>
      </Container>
    </Box>
  );
}

const data = {
  aims: {
    id: 'aims',
    title: "Aims: ",
    description: <>
      The combination of block-chain and Web3 concept creates a wonderful opportunity and since this space is new-born,
      its real potential has not yet been released. Our main target is to activate the extensive and varied features of
      this area; in other words putting all the puzzle pieces together and create a universal and multi-functional WEB3
      brand within the realm of a magnificent phantasy world.
    </>
  },
  founderTeam: {
    id: 'founderTeam',
    title: "Founder Team: ",
    description: <>
      We, the founders of Taisen have been around exploring the decentralized block-chain world for years now and have
      been monitoring the NFT space closely and professionally for almost two years. We never were in a rush as we
      wanted to ensure we had enough knowledge to build a revolutionary project in web3. We have had achievements in the
      block-chain space and also have been incognito as it is what this space provides. For the time being, just like
      many successful projects, we wish to remain incognito as we believe it is beneficial to the project, but
      throughout time, you will know more about us and see how we have gathered the best experts in the world and how
      with PATIENCE, we conquer.
    </>
  },
  metaverse: {
    id: 'metaverse',
    title: "MetaVerse: ",
    description: <>
      It was late 2021 when the heat of MetaVerse was metastasizing in crypto world and there were buzzes about
      MetaVerse becoming the future and the next Bitcoin!!
      Do not take this the wrong way, we do believe in MetaVerse but probably not the kind you have heard of. Though
      there is no comprehensive definition of it, we plan to create a decentralized MetaVerse based on web3 notion. A
      true virtual world! We are working on ideas and setting the pieces to come up with the proper approach to
      implement the final vision on MetaVerse and to do so, we sure need your points of view to accomplish the
      phenomenon. We will provide a separate white-paper on this matter in time.
    </>
  },
  taisenToken: {
    id: 'taisenToken',
    title: "Taisen Token ",
    description: <>
      We are researching on this matter simultaneously but absolutely no rush is intended and launching Taisen token
      will coincide with Taisen game.
    </>
  },
  constantUpgrade: {
    id: 'constantUpgrade',
    title: "Constant Upgrade: ",
    description: <>
      As above mentioned, the founder team are knowledgeable and best at what they do but that does not mean “KNOWING
      EVERYTHING”. We currently are negotiating with experts in the space to stand beside us and share their knowledge.
      As we march further, the team gets bigger and the flow goes on. If you think you can be a part of this movement,
      do not hesitate to contact us: <a
      href="mailto:Taisen.nft@gamil.com">Taisen.nft@gamil.com</a>

    </>
  },
  communityValues: {
    id: 'communityValues',
    title: "Community Values: ",
    description: <>
      A project that claims Web3 must be community oriented, the thing that quite frankly we do not see these days. We
      promise you that our big plans are dynamic, meaning any changes demanded by the majority of holders, will be
      applied.
    </>
  },
  theLore: {
    id: 'theLore',
    title: "The Lore: ",
    description: <>
      We are proud to announce that Taisen is the first NFT project based on a rich story and phantasy world, aka
      MetaNarrative of Historiography.
      This was an original idea and after checking different aspects, we came to conclusion that it can substantially
      add to the charm and quality of web3 world. Hence we negotiated with historian novelists to write a lore based on
      the fascinating history of Japan and the idea of MetaVerse; as you can guess the result was beautiful. Of course
      the story is at its inception and expands to a far-reaching world. We are super bullish on the lore.
      <br/>
      Ps. all rights of the lore are reserved to the holders equally and we discuss the terms further in the Road-Map.
    </>
  },
  artAndRarity: {
    id: 'artAndRarity',
    title: "Art and Rarity: ",
    description: <>
      One of the most important components of collectible projects is the art quality and it is a matter that proves the
      dedication of the founder team. While many assume any drawing can become collectible regardless of the art quality
      and only project utilities matter, we could not disagree more with all due respect. We believe art quality and
      proper rarity system are vital. Therefore, we carefully analyzed the concept and art style as we believe this art
      lasts forever. Those who have been with us from the beginning on Twitter can confirm that how long we took to
      release our art concept as we were working with maximum delicacy on details.
      The rarity system (If you do not have enough information on the subject, take a quick tour on Google and continue
      reading) has a high level importance in a collectible project and ignoring the matter has resulted negatively for
      many. For instance, many projects have items too similar to another. We have designed more than 500 different
      traits not only in color! But every one of them are absolutely unique.
      It is a fact that only diverse traits cannot prevent the said negative results, so aside from designing unique
      properties we devoted a considerable time to write formulas to ensure the following results:
      <br/>
      One: items while being collectibles, are not too similar
      <br/>
      Two: items from common to super rare, follow a logical slope
      <br/>
      Every item in Taisen has to pass 4 formulas to be finalized. The rarity system was very important to us as it is
      vital in our upcoming game (introduced in the #🗾roadmap ) aside from the collectible art matters.
    </>
  },
  followingResult: {
    id: 'followingResults',
    title: "Following Results: ",
    description: <>

    </>
  },
};

export default SecSection;
