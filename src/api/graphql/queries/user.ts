import gql from "graphql-tag";

export const getUserMetadataGQL = gql`
  query GetUserMetadata {
    getUserMetadata {
      isOnboarded
      hasSeenWelcomePopup
      hasReceivedWelcomeCoins
    }
  }
`;

export const getUserProfileGQL = gql`
  query GetUserProfile($userProfileInput: UserProfileInput!) {
    getUserProfile(userProfileInput: $userProfileInput) {
      user {
        id
        email
        phone
        facebookId
        googleId
        username
        avatar
        banner
        xp
        pushSubscription
        hasWelcome
        smsNotification
        phoneNotification
        billingName
        billingPhone
        billingEmail
        billingCurrency
      }
      isFriend
      # nbMomentsPlayed
      nbMatchesWon
      nbTournamentsWon
      nbFriends
      winningPercent
      nbUserPlayedBeatItTournaments
      todayEarning {
        totalWinnings
        currency
        type
        walletId
        external_id
      }
      totalEarning {
        totalWinnings
        currency
        type
        external_id
        id
      }
      # userMomentStats {
      #   isCompleted
      #   moment {
      #     id
      #     appId
      #     snapshotId
      #     title
      #     description
      #     type
      #     scoreLabel
      #     scoreZoneId
      #     time
      #     playCost
      #     unlockCost
      #     unlockXp
      #     timesPlayed
      #     data
      #     showTimer
      #     momentType
      #     rankOrder
      #     status
      #     createdAt
      #     updatedAt
      #     app {
      #       id
      #       title
      #       company
      #       description
      #       category
      #       timesPlayed
      #       rotationMode
      #       status
      #       createdAt
      #       updatedAt
      #       type
      #     }
      #     zoneId
      #   }
      #   createdAt
      #   updatedAt
      #   numberOfTimesPlayed
      #   totalTimePlayed
      #   momentId
      #   appId
      #   userId
      #   id
      #   xp
      # }
      userActivity {
        createdAt
        updatedAt
        data
        type
        userId
        id
      }
    }
  }
`;

export const getUserV2GQL = gql`
  query GetUserV2($isSubscription: Boolean!) {
    getUserV2 {
      user {
        id
        cheatStatus
        email
        phone
        facebookId
        googleId
        username
        avatar
        banner
        xp
        currency
        pushSubscription
        hasWelcome
        smsNotification
        phoneNotification
        billingName
        billingPhone
        billingEmail
        billingCurrency
        currencyLocked
        wallets {
          type
          currency
          balance
          sequence
        }
        language
      }
      initialDepositBonus
      nbNotificationsUnread
      nbFriendRequestUnaccepted
      nbBattlesPending
      canUseCash
      permissionGroups
      firstTime
      whileAway {
        eventType
        momentType
        gameId
        matchId
        tournamentId
        title
        amount
        playerScore
        opponentScore
        currency
        avatar
        username
      }
      subscription @include(if: $isSubscription) {
        status
        umrid
        field
        renewalDate
      }
    }
  }
`;

export const listUserActivitiesGQL = gql`
  query ListUserActivities($getUserActivitiesInput: GetUserActivitiesInput!) {
    listUserActivities(getUserActivitiesInput: $getUserActivitiesInput) {
      id
      userId
      type
      data
      createdAt
    }
  }
`;

export const listUserTransactionsGQL = gql`
  query ListUserTransactions($listTransactionsInput: ListTransactionsInput) {
    listUserTransactions(listTransactionsInput: $listTransactionsInput) {
      type
      amount
      runningBalance
      currency
      walletType
      category
      transactionType
      workflow
      gameId
      gameTitle
      status
      createdAt
      reference
      entryId
      expiryDate
    }
  }
`;

export const findUserGQL = gql`
  query FindUser($findUserInput: FindUserInput) {
    findUser(findUserInput: $findUserInput) {
      id
      username
      avatar
      xp
    }
  }
`;

export const getCryptoDepositAddressGQL = gql`
  query GetCryptoDepositAddress {
    getCryptoDepositAddress
  }
`;

export const estimateCryptoTransactionFeeGQL = gql`
  query EstimateCryptoTransactionFee(
    $estimateCryptoTransactionFeeInput: EstimateCryptoTransactionFeeInput
  ) {
    estimateCryptoTransactionFee(
      estimateCryptoTransactionFeeInput: $estimateCryptoTransactionFeeInput
    )
  }
`;

export const getWithdrawalGQL = gql`
  query GetWithdrawal($getWithdrawalInput: GetWithdrawalInput) {
    getWithdrawal(getWithdrawalInput: $getWithdrawalInput) {
      transactionId
    }
  }
`;

export const getDepositGQL = gql`
  query GetDeposit($getDepositInput: GetDepositInput) {
    getDeposit(getDepositInput: $getDepositInput) {
      transactionId
    }
  }
`;

export const getConfigGQL = gql`
  query GetConfig {
    getConfig {
      firstDepositBonus {
        amount
      }
      minimumDepositBonus {
        minAmount
        amount
      }
      freeCoins {
        amount
      }
      minimumWithdrawal {
        amount
      }
    }
  }
`;

export const getUserFeedGQL = gql`
  query GetUserFeed($leaderboardsGetLeaderboardInput: GetLeaderboardsInput) {
    getUserFeed {
      game {
        id
        title
        skill
        canUseCash
        totalCompleted
        gamesPlayedByUser
        battleCost {
          fee
          currency
          cost
        }
        hasBattle
        type
        rankCategories {
          name
          value
        }
      }
      tournaments {
        id
        gameId
        expiredAt
        currency
        costPerUser
        fee
        rankingOrder
        playerCount
        totalPrize
        tournamentType
        maxPlayers
        myRank
        calculatedPrizePool
        leaderboards(getLeaderboardInput: $leaderboardsGetLeaderboardInput) {
          status
          endedAt
          startedAt
          score
          user {
            xp
            banner
            avatar
            username
            id
          }
          userId
          tournamentId
          id
        }
        moment {
          id
          appId
          app {
            title
            type
            category
            rotationMode
          }
          description
          snapshotId
          title
          unlockXp
          timesPlayed
          momentType
          isCompleted
          zoneId
          time
          type
          showTimer
        }
        livestreams {
          currentPlayer {
            id
            avatar
            username
          }
          id
          numberOfViewers
          status
        }
      }
      beatIt {
        tournamentInfo {
          id
          tournamentType
          tournamentCategories
          currency
          gameId
          momentType
          topScore
          username
          avatar
          expiredAt
          startedAt
          playedAt
          playerCount
          maxPlayers
          costPerUser
          userId
        }
      }
      hotBattles {
        matchId
        currency
        costPerUser
        entryFee
        matchState
        host {
          id
          username
          avatar
        }
        game {
          id
          title
          type
        }
        scoreToBeat
        prize
        winType
        createdAt
      }
      houseBattles {
        matchId
        currency
        costPerUser
        entryFee
        matchState
        oddMultiplier
        host {
          id
          username
          avatar
        }
        game {
          id
          title
        }
        scoreToBeat
        prize
        winType
        createdAt
      }
    }
  }
`;
