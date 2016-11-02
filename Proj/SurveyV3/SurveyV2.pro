#-------------------------------------------------
#
# Project created by QtCreator 2016-10-18T08:23:18
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = SurveyV2
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    build.cpp \
    questionblock.cpp \
    login.cpp \
    signin.cpp \
    surveyview.cpp

HEADERS  += mainwindow.h \
    build.h \
    questionblock.h \
    login.h \
    signin.h \
    surveyview.h

FORMS    += mainwindow.ui \
    form.ui \
    build.ui \
    questionblock.ui \
    login.ui \
    signin.ui \
    surveyview.ui

RESOURCES += \
    icons.qrc
